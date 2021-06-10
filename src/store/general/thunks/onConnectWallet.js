import { thunk } from 'easy-peasy';
import { getRoute } from '../../../ui/config/routes';
import { redirectActions } from '../../../config/redirectActions';

export const onConnectWallet = thunk(async (_, __, { getStoreState, getStoreActions }) => {
  const store = getStoreState();
  const wallet = store.general.entities.wallet;

  const actions = getStoreActions();
  const setTemporaryData = actions.general.setTemporaryData;

  const redirectAction = redirectActions.connectWallet;

  setTemporaryData({ redirectAction });
  // redirect to NEAR Wallet
  wallet.requestSignIn({
    successUrl: getRoute.callbackUrl({ redirectAction }),
    failureUrl: getRoute.callbackUrl({ redirectAction, errorCode: 'userReject' }),
  });
});
