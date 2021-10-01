import { action } from 'easy-peasy';

export const setHasCampaigns = action((slice, campaignIds) => {
  slice.hasCampaigns = campaignIds.length > 0;
});
