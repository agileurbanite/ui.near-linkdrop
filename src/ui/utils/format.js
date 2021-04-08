import { utils } from 'near-api-js';

export const formatNearBalance = (balance) => `${utils.format.formatNearAmount(balance, 5)} NEAR`;
