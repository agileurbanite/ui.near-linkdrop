import BN from 'bn.js';
import { parseNearAmount } from 'near-api-js/lib/utils/format';

export const getCampaignData = (getValues) => {
  const { icon, name, amountPerLink: _amountPerLink, totalLinks } = getValues();
  // We may calculate the real fee in the future
  const serviceFee = parseNearAmount('0.05');
  const amountPerLink = parseNearAmount(_amountPerLink);
  const totalInLinks = new BN(amountPerLink).mul(new BN(totalLinks)).toString();
  const total = new BN(totalInLinks).add(new BN(serviceFee)).toString();

  return {
    icon,
    name,
    amountPerLink,
    totalLinks,
    totalInLinks,
    serviceFee,
    total,
  };
};
