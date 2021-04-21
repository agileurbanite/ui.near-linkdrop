import { action } from 'easy-peasy';

export const deactivateLink = action((slice, payload) => {
  const { secretKey } = payload;

  const link = slice.campaign.links.find((_link) => _link.secretKey === secretKey);
  link.isActive = false;
});
