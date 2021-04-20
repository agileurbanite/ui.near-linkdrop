import BN from 'bn.js';
import dateFormat from 'dateformat';
import { formatNearBalance } from './format';

export const getTotalAmount = (amountPerLink, totalLinks) =>
  formatNearBalance(new BN(amountPerLink).mul(new BN(totalLinks)));

export const getTime = (createdAt) => dateFormat(createdAt, 'd mmm yyyy');
