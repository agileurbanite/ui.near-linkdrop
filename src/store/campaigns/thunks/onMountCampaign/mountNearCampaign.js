import { pagination as paginationConfig } from '../../../../ui/config/campaign';
import { getCampaignContract } from '../../../helpers/getContracts';
import { getPagination } from '../../helpers/getPagination';
import { getKeysFromMnemonic } from '../../helpers/keys/getKeysFromMnemonic';

export const mountNearCampaign = async ({
  state,
  actions,
  mnemonic,
  campaignId,
  metadata,
  balance,
}) => {
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

  const keyStats = await getCampaignContract(state, campaignId).get_keys({
    keys: keys.map(({ pk }) => pk),
  });

  actions.campaigns.mountCampaign({
    campaignId,
    metadata,
    balance,
    keys,
    keyStats,
    pagination,
  });
};
