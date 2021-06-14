import BN from 'bn.js';
import dateFormat from 'dateformat';
import { formatNearBalance } from './format';

export const getTotalAmount = (amountPerLink, totalLinks) =>
  formatNearBalance(new BN(amountPerLink).mul(new BN(totalLinks)));

export const getTime = (createdAt) => dateFormat(createdAt, 'd mmm yyyy');

// const time = 1623418090833872100;
// console.log(Math.trunc(time / 1000 / 1000));
// console.log(new Date(time));
