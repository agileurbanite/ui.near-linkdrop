import { onInitNear } from './onInitNear';
import { onRouteChange } from './onRouteChange';
import { onConnectToWallet } from './onConnectToWallet';
import { onDisconnect } from './onDisconnect';
import { onHandleWalletRedirect } from './onHandleWalletRedirect/onHandleWalletRedirect';
import { onLoadDataBeforeFirstRender } from './onLoadDataBeforeFirstRender';
import { onLoadAccountBalance } from './onLoadAccountBalance';

export const thunks = {
  onInitNear,
  onRouteChange,
  onConnectToWallet,
  onDisconnect,
  onHandleWalletRedirect,
  onLoadDataBeforeFirstRender,
  onLoadAccountBalance,
};
