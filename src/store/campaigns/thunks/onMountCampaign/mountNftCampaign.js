import { pagination as paginationConfig } from '../../../../ui/config/campaign';
import { getNftCampaignContract } from '../../../helpers/getContracts';
import { toCamelCase } from '../../../helpers/toCamelCase';
import { getPagination } from '../../helpers/getPagination';
import { getKeysFromMnemonic } from '../../helpers/keys/getKeysFromMnemonic';

export const mountNftCampaign = async ({
  actions,
  connection,
  mnemonic,
  campaignId,
  metadata,
  balance,
}) => {
  const pagination = getPagination({
    page: paginationConfig.startPage,
    // total: metadata.keysStats.total,
    total: 1,
    elementsPerPage: paginationConfig.linksPerPage,
  });

  const keys = await getKeysFromMnemonic({
    mnemonic,
    start: pagination.range.start,
    end: pagination.range.end,
    campaignId,
    createdAt: metadata.createdAt,
  });

  const drops = await getNftCampaignContract(connection, campaignId)
    .get_drops({ keys: keys.map(({ publicKey }) => publicKey) })
    .then((r) => toCamelCase(r));

  actions.campaigns.setNftCampaign({
    campaignId,
    metadata,
    balance,
    keys,
    drops,
    pagination,
  });
};
