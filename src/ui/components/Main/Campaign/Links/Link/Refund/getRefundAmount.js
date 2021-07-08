import BN from 'bn.js';
import { formatNearBalance } from '../../../../../../utils/format';

export const getRefundAmount = (amountPerLink) =>
  formatNearBalance(new BN(amountPerLink).sub(new BN('1000000000000000000000000')));
