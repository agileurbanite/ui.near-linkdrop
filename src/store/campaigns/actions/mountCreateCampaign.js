import { action } from 'easy-peasy';

export const mountCreateCampaign = action((slice, payload) => {
  const { balance, campaignIds } = payload;

  slice.createCampaign = {
    availableBalance: balance.available,
    campaignNames: new Set(campaignIds.map((campaignId) => campaignId.split('.')[0])),
  };
});
