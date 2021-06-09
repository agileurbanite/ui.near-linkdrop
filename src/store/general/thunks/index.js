import { onInitApp } from './onInitApp/onInitApp';
import { onRouteChange } from './onRouteChange';
import { onConnectWallet } from './onConnectWallet';
import { onLoadAccountBalance } from './onLoadAccountBalance';
import { onCreateAccount } from './onCreateAccount';

export const thunks = {
  onInitApp,
  onConnectWallet,
  onLoadAccountBalance,
  onRouteChange,
  onCreateAccount,
};
