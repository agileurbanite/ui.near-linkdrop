import BN from 'bn.js';
import { parseNearAmount } from 'near-api-js/lib/utils/format';

export const getCampaignData = (getValues) => {
  const { icon, name, amountPerLink, totalLinks } = getValues();
  // We may calculate the real fee in the future
  const nearPriceForCampaignCreation = new BN(parseNearAmount('0.05'));
  const oneNearFeePerLink = new BN(parseNearAmount('0'));
  const _amountPerLink = new BN(parseNearAmount(amountPerLink));
  const _totalLinks = new BN(totalLinks);

  const pureAmountPerLink = _amountPerLink.sub(oneNearFeePerLink);
  const totalInLinks = pureAmountPerLink.mul(_totalLinks);

  const serviceFee = oneNearFeePerLink
    .mul(_totalLinks)
    .add(nearPriceForCampaignCreation);

  const total = totalInLinks.add(serviceFee);

  return {
    icon,
    name,
    amountPerLink: pureAmountPerLink.toString(),
    totalLinks,
    totalInLinks: totalInLinks.toString(),
    serviceFee: serviceFee.toString(),
    total: total.toString(),
  };
};
