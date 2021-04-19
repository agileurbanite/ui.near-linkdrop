import { action } from 'easy-peasy';

export const addCampaign = action((slice, payload) => {
  const { campaignId } = payload;
  const { name, icon, amountPerLink, totalLinks, keys } = slice.pendingCampaign;

  slice.list.push(campaignId);
  slice.map[campaignId] = {
    campaignId,
    name,
    icon,
    status: 'active',
    createdAt: new Date(),
    amountPerLink,
    totalLinks,
    links: keys.map((key, index) => ({ ...key, order: index + 1 })),
  };
  slice.pendingCampaign = {};
});
