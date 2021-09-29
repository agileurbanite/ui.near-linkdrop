import { thunk } from 'easy-peasy';
import { toCamelCase } from '../../helpers/toCamelCase';
import { getKeysFromMnemonic } from '../helpers/getKeysFromMnemonic';
import { getPagination } from '../helpers/getPagination';
import { getCampaignContract } from '../../helpers/getContracts';
import { pagination as paginationConfig } from '../../../ui/config/campaign';

export const onMountCampaign = thunk(async (_, campaignId, { getStoreState, getStoreActions }) => {
  const state = getStoreState();
  const mnemonic = state.general.user.linkdrop.mnemonic;

  const actions = getStoreActions();
  const mountCampaign = actions.campaigns.mountCampaign;

  const campaign = getCampaignContract(state, campaignId);

  const [balance, _metadata] = await Promise.all([
    campaign.account.getAccountBalance(),
    campaign.get_campaign_metadata(),
  ]);

  const metadata = toCamelCase(_metadata);

  // TODO redirect to campaigns if status is wrong or campaign is not user campaign

  const pagination = getPagination({
    page: paginationConfig.startPage,
    total: metadata.keysStats.total,
    elementsPerPage: paginationConfig.linksPerPage,
  });

  const keys = await getKeysFromMnemonic({
    mnemonic,
    start: pagination.range.start,
    end: pagination.range.end,
    internalCampaignId: metadata.campaignId,
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
