import { action } from 'easy-peasy';
import { campaignTypes } from '../../../config/campaignStatus';
import { getCampaignName } from '../../../ui/utils/formatCampaignData';

export const mountCampaign = action((slice, payload) => {
  const { campaignId, metadata, balance, keys, keyStats, pagination } = payload;

  slice.campaign = {
    campaignId,
    type: campaignTypes.near.type,
    internalCampaignId: metadata.campaignId,
    name: getCampaignName(campaignId),
    balance,
    tokensPerKey: metadata.tokensPerKey,
    createdAt: Math.trunc(metadata.createdAt / 1000000), // Convert nanoseconds to milliseconds
    keysStats: metadata.keysStats,
    status: metadata.status,
    pagination,
    qr: {
      isOpen: false,
      order: null,
      link: null,
    },
    keys: keys.map((key, index) => ({
      ...key,
      status: keyStats[index].status,
    })),
  };
});
