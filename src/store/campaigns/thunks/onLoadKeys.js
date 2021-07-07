import { thunk } from 'easy-peasy';
import { getKeysFromMnemonic } from '../helpers/getKeysFromMnemonic';
import { getPagination } from '../helpers/getPagination';
import { getCampaignContract } from '../../../near/helpers/getCampaignContract';

export const onLoadKeys = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { page, total, elementsPerPage, showLoader, hideLoader } = payload;

  const state = getStoreState();
  const walletUserId = state.general.user.currentAccount;
  const mnemonic = state.general.user.accounts[walletUserId].linkdrop.mnemonic;
  const campaignId = state.campaigns.campaign.campaignId;

  const actions = getStoreActions();
  const loadKeys = actions.campaigns.loadKeys;

  showLoader();
  const campaign = getCampaignContract(state, campaignId);
  const pagination = getPagination({ page, total, elementsPerPage });

  const keys = await getKeysFromMnemonic({
    mnemonic,
    start: pagination.range.start,
    end: pagination.range.end,
  });
  const keyStats = await campaign.get_keys({ keys: keys.map(({ pk }) => pk) });

  loadKeys({ keys, keyStats, pagination });
  hideLoader();
});
