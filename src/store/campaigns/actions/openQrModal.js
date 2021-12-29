import { action } from 'easy-peasy';
import { nearConfig } from '../../../config/nearConfig';

export const openQrModal = action((slice, payload) => {
  const {order, sk, campaignId} = payload
  console.log(payload);
  // const campaignId = slice.campaign.campaignId;
  // const sk = slice.campaign.keys[order - 1]?.sk;
  const link = nearConfig.getCreateAccountAndClaimLink(sk, campaignId);

  slice.campaign.qr = { isOpen: true, order, link };
});
