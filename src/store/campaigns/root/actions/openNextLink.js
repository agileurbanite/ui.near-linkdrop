import { action } from 'easy-peasy';
import { nearConfig } from '../../../config/nearConfig';

export const openNextLink = action((slice, payload) => {
  const { order } = payload;

  const campaignId = slice.campaign.campaignId;
  const altKey = slice.campaign.keys.find((key) => key.order === order);
  const nextKey = slice.campaign.keys.find((key) => key.status === 'Active' && key.order > order);

  const key = !nextKey ? altKey : nextKey;
  const link = nearConfig.getCreateAccountAndClaimLink(key.sk, campaignId);

  slice.campaign.qr.link = link;
  slice.campaign.qr.order = key.order;
});
