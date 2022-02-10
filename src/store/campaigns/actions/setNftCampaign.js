import { action } from 'easy-peasy';
import { getCampaignName } from '../../../ui/utils/formatCampaignData';
import { nanoToMilli } from '../../helpers/nanoToMilli';

export const setNftCampaign = action((slice, payload) => {
  const { campaignId, metadata, balance, keys, drops, pagination } = payload;

  slice.campaign = {
    campaignId,
    type: metadata.campaignType,
    name: getCampaignName(campaignId),
    balance,
    createdAt: nanoToMilli(metadata.createdAt),
    keysStats: metadata.dropStats || { // TODO fix this
      total: 1,
    },
    status: metadata.status,
    pagination,
    qr: {
      isOpen: false,
      order: null,
      link: null,
    },
    keys: keys.map((key, index) => ({
      order: key.order,
      pk: key.publicKey,
      sk: key.secretKey,
      status: drops[index].status,
    })),
  };
});
