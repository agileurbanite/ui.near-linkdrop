import { action } from 'easy-peasy';
import { emoji } from '../../../ui/config/emoji';

export const mountCampaigns = action((slice, payload) => {
  const { campaignsIds, campaigns } = payload;

  slice.list = [];
  slice.map = {};

  campaigns.forEach((campaign, index) => {
    const campaignId = campaignsIds[index];

    slice.list.push(campaignId);
    slice.map[campaignId] = {
      campaignId,
      icon: emoji.foxMuzzle,
      status: campaign.status,
      createdAt: Math.trunc(campaign.created_at / 1000 / 1000), // Convert nanoseconds to milliseconds
      tokensPerKey: campaign.tokens_per_key,
      keysStats: campaign.keys_stats,
    };
  });
});
