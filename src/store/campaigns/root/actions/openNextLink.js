import { action } from 'easy-peasy';
import { nearConfig } from '../../../../config/nearConfig';

export const openNextLink = action((slice, payload) => {
  const { order } = payload;
  const campaignId = slice.campaign.campaignId;
  const nextKey = slice.campaign.keys.find((key) => key.order > order);
  const link = nearConfig.getCreateAccountAndClaimLink(nextKey.sk, campaignId);

  slice.campaign.qr.link = link;
  slice.campaign.qr.order = nextKey.order;
});
