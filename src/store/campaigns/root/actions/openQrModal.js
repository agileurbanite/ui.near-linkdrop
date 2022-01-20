import { action } from 'easy-peasy';
import { nearConfig } from '../../../../config/nearConfig';

export const openQrModal = action((slice, payload) => {
  const {order, sk, campaignId} = payload
  const link = nearConfig.getCreateAccountAndClaimLink(sk, campaignId);
  slice.campaign.qr = { isOpen: true, order, link };
});
