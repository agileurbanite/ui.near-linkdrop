import { action } from 'easy-peasy';
import { getCampaignName } from '../../../ui/utils/formatCampaignData';
import {campaignTypes} from '../../../config/campaignStatus';

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
      type: campaignTypes.near,
      status: campaign.status,
      createdAt: Math.trunc(campaign.createdAt / 1000000), // Convert nanoseconds to milliseconds
      tokensPerKey: campaign.tokensPerKey,
      keysStats: campaign.keysStats,
    };
  });
});
