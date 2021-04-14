import { action } from 'easy-peasy';

export const addPendingCampaign = action((slice, payload) => {
  slice.pendingCampaign = payload;
});
