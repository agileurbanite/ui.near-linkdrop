import { utils } from 'near-api-js';

export const formatNearBalance = (balance) => `${utils.format.formatNearAmount(balance, 2)} NEAR`;
