import { onInitApp } from './onInitApp/onInitApp';
import { onRouteChange } from './onRouteChange';
import { onConnectWallet } from './onConnectWallet';
import { onLoadAccountBalance } from './onLoadAccountBalance';

export const thunks = {
  onInitApp,
  onConnectWallet,
  onLoadAccountBalance,
  onRouteChange,
};
