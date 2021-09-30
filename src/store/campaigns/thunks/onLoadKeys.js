import { thunk } from 'easy-peasy';
import { getKeysFromMnemonic } from '../helpers/getKeysFromMnemonic';
import { getPagination } from '../helpers/getPagination';
import { getCampaignContract } from '../../helpers/getContracts';

export const onLoadKeys = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { page, total, elementsPerPage, showLoader, hideLoader } = payload;

  const state = getStoreState();
  const mnemonic = state.general.user.linkdrop.mnemonic;
  const campaignId = state.campaigns.campaign.campaignId;
  const internalCampaignId = state.campaigns.campaign.internalCampaignId;

  const actions = getStoreActions();
  const loadKeys = actions.campaigns.loadKeys;

  showLoader();
  const campaign = getCampaignContract(state, campaignId);
  const pagination = getPagination({ page, total, elementsPerPage });

  const keys = await getKeysFromMnemonic({
    mnemonic,
    start: pagination.range.start,
    end: pagination.range.end,
    internalCampaignId,
  });
  const keyStats = await campaign.get_keys({ keys: keys.map(({ pk }) => pk) });

  loadKeys({ keys, keyStats, pagination });
  hideLoader();
});
