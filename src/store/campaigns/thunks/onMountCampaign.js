import { thunk } from 'easy-peasy';
import { Account } from 'near-api-js';
import { getKeysFromMnemonic } from '../helpers/getKeysFromMnemonic';
import { getPagination } from '../helpers/getPagination';
import { getCampaignContract } from '../helpers/getCampaignContract';
import { pagination as paginationConfig } from '../../../ui/config/campaign';

export const onMountCampaign = thunk(async (_, campaignId, { getStoreState, getStoreActions }) => {
  const state = getStoreState();
  const near = state.general.entities.near;
  const walletUserId = state.general.user.currentAccount;
  const mnemonic = state.general.user.accounts[walletUserId].linkdrop.mnemonic;

  const actions = getStoreActions();
  const mountCampaign = actions.campaigns.mountCampaign;

  const account = new Account(near.connection, campaignId);
  const campaign = getCampaignContract(state, campaignId);

  const [balance, metadata] = await Promise.all([
    account.getAccountBalance(),
    campaign.get_campaign_metadata(),
  ]);

  const pagination = getPagination({
    page: paginationConfig.startPage,
    total: metadata.keys_stats.total,
    elementsPerPage: paginationConfig.linksPerPage,
  });

  const keys = await getKeysFromMnemonic({
    mnemonic,
    start: pagination.range.start,
    end: pagination.range.end,
  });

  const keyStats = await campaign.get_keys({ keys: keys.map(({ pk }) => pk) });

  mountCampaign({
    campaignId,
    metadata,
    balance,
    keys,
    keyStats,
    pagination,
  });
});
