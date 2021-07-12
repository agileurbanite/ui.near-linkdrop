import { action } from 'easy-peasy';

export const deleteCampaign = action((slice, campaignId) => {
  slice.list = slice.list.filter((id) => id !== campaignId);
  delete slice.map[campaignId];
});
