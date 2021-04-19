import { action } from 'easy-peasy';

export const mountCampaign = action((slice, payload) => {
  const { campaignId, keys } = payload;
  const campaign = slice.map[campaignId];

  slice.campaign = {
    ...campaign,
    links: campaign.links.map((link, index) => ({
      ...link,
      isActive: keys[index].status === 'fulfilled',
    })),
  };
});
