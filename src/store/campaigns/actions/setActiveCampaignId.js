import { action } from 'easy-peasy';

export const setActiveCampaignId = action((slice, campaignId) => {
  slice.activeCampaignId = campaignId;
});
