import { onInitApp } from './onInitApp/onInitApp';
import { onRouteChange } from './onRouteChange';
import { onConnectWallet } from './onConnectWallet';
import { onDisconnect } from './onDisconnect';

export const thunks = {
  onInitApp,
  onConnectWallet,
  onRouteChange,
  onDisconnect,
};
