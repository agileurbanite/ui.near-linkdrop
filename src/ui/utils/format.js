import { utils } from 'near-api-js';

export const formatNearBalance = (balance, frac = 2) =>
  `${utils.format.formatNearAmount(balance, frac)} NEAR`;
