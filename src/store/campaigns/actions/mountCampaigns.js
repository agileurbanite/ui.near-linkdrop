import { action } from 'easy-peasy';
import { emoji } from '../../../ui/config/emoji';

export const mountCampaigns = action((slice, payload) => {
  const { campaignIds, campaigns } = payload;

  slice.list = [];
  slice.map = {};

  campaigns.forEach((campaign, index) => {
    const campaignId = campaignIds[index];

    slice.list.push(campaignId);
    slice.map[campaignId] = {
      campaignId,
      icon: emoji.foxMuzzle,
      status: campaign.status,
      createdAt: Math.trunc(campaign.created_at / 1000000), // Convert nanoseconds to milliseconds
      tokensPerKey: campaign.tokens_per_key,
      keysStats: campaign.keys_stats,
    };
  });
});
