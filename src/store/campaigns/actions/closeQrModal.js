import { action } from 'easy-peasy';

export const closeQrModal = action((slice) => {
  slice.campaign.qr.isOpen = false
});
