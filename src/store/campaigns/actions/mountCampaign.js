import { action } from 'easy-peasy';
import { emoji } from '../../../ui/config/emoji';
import { getCampaignName } from '../../../ui/utils/formatCampaignData';

export const mountCampaign = action((slice, payload) => {
  const { campaignId, metadata, keys, keyStats } = payload;
  console.log(metadata);

  slice.campaign = {
    campaignId,
    name: getCampaignName(campaignId),
    icon: emoji.foxMuzzle,
    tokensPerKey: metadata.tokens_per_key,
    createdAt: Math.trunc(metadata.created_at / 1000000), // Convert nanoseconds to milliseconds
    keysStats: metadata.keys_stats,
    status: metadata.status,
    keys: keys.map((key, index) => ({
      ...key,
      status: keyStats[index].status.toLowerCase(),
    })),
  };
});
