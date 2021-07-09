import { action } from 'easy-peasy';
import { keyStatus } from '../../../config/keyStatus';

export const refundLink = action((slice, payload) => {
  const { balance, metadata, pk } = payload;

  slice.campaign.balance = balance;
  slice.campaign.keysStats = metadata.keys_stats;
  slice.campaign.status = metadata.status;

  const link = slice.campaign.keys.find((key) => key.pk === pk);
  link.status = keyStatus.refunded;
});
