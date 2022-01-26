import BN from '../../../node_modules/bn.js/lib/bn';

export const terraGas = (gas) => new BN(Number(gas) * 1000000000000);
