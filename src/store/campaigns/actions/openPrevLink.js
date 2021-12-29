import { action } from 'easy-peasy';
import { nearConfig } from '../../../config/nearConfig';

export const openPrevLink = action((slice, payload) => {
  const { order } = payload;
  const campaignId = slice.campaign.campaignId;
  const altKey = slice.campaign.keys.find((key) => key.order === order);
  const prevKey = slice.campaign.keys
    .slice(0, order)
    .reverse()
    .find((key) => key.status === 'Active' && key.order < order);

  const nextKey = !prevKey ? altKey : prevKey;
  const link = nearConfig.getCreateAccountAndClaimLink(nextKey.sk, campaignId);
  slice.campaign.qr.link = link;
  slice.campaign.qr.order = nextKey.order;
});
