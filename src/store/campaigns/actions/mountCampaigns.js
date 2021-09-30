import { action } from 'easy-peasy';
import { emoji } from '../../../ui/config/emoji';
import { getCampaignName } from '../../../ui/utils/formatCampaignData';

export const mountCampaigns = action((slice, payload) => {
  const { campaignIds, campaigns } = payload;

  slice.list = [];
  slice.map = {};

  campaigns.forEach((campaign, index) => {
    const campaignAccountId = campaignIds[index];

    slice.list.push(campaignAccountId);
    slice.map[campaignAccountId] = {
      campaignId: campaignAccountId,
      internalCampaignId: campaign.campaignId,
      name: getCampaignName(campaignAccountId),
      icon: emoji.foxMuzzle,
      status: campaign.status,
      createdAt: Math.trunc(campaign.createdAt / 1000000), // Convert nanoseconds to milliseconds
      tokensPerKey: campaign.tokensPerKey,
      keysStats: campaign.keysStats,
    };
  });
});
