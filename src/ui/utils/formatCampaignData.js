import BN from 'bn.js';
import dateFormat from 'dateformat';
import { formatNearBalance } from './format';

export const getTotalAmount = (amountPerLink, totalLinks) =>
  formatNearBalance(new BN(amountPerLink).mul(new BN(totalLinks)));

export const getDate = (createdAt) => dateFormat(createdAt, 'd mmm yyyy');
export const getTime = (createdAt) => dateFormat(createdAt, 'd mmm yyyy HH:MM');
export const getCampaignName = (campaignId) => campaignId.split('.')[0];
