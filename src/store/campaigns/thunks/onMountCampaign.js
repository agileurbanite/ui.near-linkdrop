import { thunk } from 'easy-peasy';

export const onMountCampaign = thunk(async (actions, campaignId) => {
  actions.setActiveCampaignId(campaignId);
});
