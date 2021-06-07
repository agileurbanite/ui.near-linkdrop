import { onInitApp } from './onInitApp/onInitApp';
import { onRouteChange } from './onRouteChange';
import { onConnectToWallet } from './onConnectToWallet';
import { onLoadAccountBalance } from './onLoadAccountBalance';
import { onCreateAccount } from './onCreateAccount';

export const thunks = {
  onInitApp,
  onConnectToWallet,
  onLoadAccountBalance,
  onRouteChange,
  onCreateAccount,
};
