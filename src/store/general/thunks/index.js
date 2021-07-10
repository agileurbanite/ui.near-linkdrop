import { onInitApp } from './onInitApp/onInitApp';
import { onRouteChange } from './onRouteChange';
import { onConnectWallet } from './onConnectWallet';

export const thunks = {
  onInitApp,
  onConnectWallet,
  onRouteChange,
};
