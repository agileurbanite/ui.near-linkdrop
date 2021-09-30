export const getCampaignData = (getValues) => {
  const { icon, name, amountPerLink: amountPerKey, totalLinks: totalKeys } = getValues();

  const _amountPerKey = Number(amountPerKey);
  const _totalKeys = Number(totalKeys);
  const campaignStoragePrice = 2.7;
  const operationReservePerKey = 0.01;

  const totalPrice = campaignStoragePrice + _totalKeys * (_amountPerKey + operationReservePerKey);
  const totalInKeys = _amountPerKey * _totalKeys;
  const operationReserve = totalPrice - totalInKeys;

  return {
    icon,
    name,
    totalKeys: _totalKeys,
    amountPerKey: _amountPerKey,
    totalInKeys: totalInKeys.toFixed(2),
    operationReserve: operationReserve.toFixed(2),
    totalPrice: totalPrice.toFixed(2),
  };
};
