import { action } from 'easy-peasy';
import { campaignTypes } from '../../../config/campaignStatus';
import { getCampaignName } from '../../../ui/utils/formatCampaignData';
import { nanoToMilli } from '../../helpers/nanoToMilli';

const getNearData = (campaignId, campaign) => ({
  campaignId,
  internalCampaignId: campaign.campaignId,
  name: getCampaignName(campaignId),
  type: campaignTypes.near.type,
  status: campaign.status,
  createdAt: nanoToMilli(campaign.createdAt),
  tokensPerKey: campaign.tokensPerKey,
  keysStats: campaign.keysStats,
});

const getNftData = (campaignId, campaign) => ({
  campaignId,
  name: getCampaignName(campaignId),
  type: campaignTypes.nft.type,
  createdAt: nanoToMilli(campaign.createdAt),
  tokensPerKey: '1000000000000000000000000000',
  keysStats: {
    total: 1,
    claimed: 0,
  },
  status: 'Active',
});

const getCampaignData = (campaignId, campaign) => {
  if (campaign.campaignType === campaignTypes.nft.type) return getNftData(campaignId, campaign);
  return getNearData(campaignId, campaign);
};

export const mountCampaigns = action((slice, payload) => {
  const { campaignIds, campaigns } = payload;

  slice.list = [];
  slice.map = {};

  campaigns.forEach((campaign, index) => {
    const campaignId = campaignIds[index];
    slice.list.push(campaignId);
    slice.map[campaignId] = getCampaignData(campaignId, campaign);
  });
});
