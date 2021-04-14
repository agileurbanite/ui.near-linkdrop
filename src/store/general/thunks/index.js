import { onInitNear } from './onInitNear';
import { onRouteChange } from './onRouteChange';
import { onConnectToWallet } from './onConnectToWallet';
import { onDisconnect } from './onDisconnect';
import { onHandleWalletRedirect } from './onHandleWalletRedirect/onHandleWalletRedirect';
import { onLoadDataBeforeFirstRender } from './onLoadDataBeforeFirstRender';

export const thunks = {
  onInitNear,
  onRouteChange,
  onConnectToWallet,
  onDisconnect,
  onHandleWalletRedirect,
  onLoadDataBeforeFirstRender,
};
