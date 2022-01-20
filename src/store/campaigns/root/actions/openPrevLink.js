import { action } from 'easy-peasy';
import { nearConfig } from '../../../../config/nearConfig';

export const openPrevLink = action((slice, payload) => {
  const { order } = payload;
  const campaignId = slice.campaign.campaignId;
  const prevKey = slice.campaign.keys
    .slice(0, order)
    .reverse()
    .find((key) => key.order < order);
  const link = nearConfig.getCreateAccountAndClaimLink(prevKey.sk, campaignId);
  slice.campaign.qr.link = link;
  slice.campaign.qr.order = prevKey.order;
});
