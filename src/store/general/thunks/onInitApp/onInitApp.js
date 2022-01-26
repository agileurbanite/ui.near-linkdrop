import { thunk } from 'easy-peasy';
import { getDataBeforeRenderPage } from '../../helpers/getDataBeforeRenderPage';
import { getNearPack } from '../../helpers/getNearPack';
// import { checkUserAccounts } from './checkUserAccounts';
import { isRedirect } from './isRedirect';
import { manageNavigation } from './manageNavigation';
import { processRedirectFromWallet } from './processRedirectFromWallet/processRedirectFromWallet';

export const onInitApp = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { history, setInit } = payload;

  const actions = getStoreActions();
  const setNearPack = actions.general.setNearPack;

  // Create near and wallet instances and set it into the state
  setNearPack(await getNearPack());
  // Check accounts existence
  // TODO Enable!
  // await checkUserAccounts(getStoreState(), actions, history);

  const state = getStoreState();
  // All redirect from NEAR Wallet leads to /redirect-from-wallet route. If it is the case,
  // handle it and redirect the user to the appropriate page. If not - check if a user has access
  // to the page and redirect to the proper page
  if (isRedirect(state, history)) {
    await processRedirectFromWallet(state, actions, history);
  } else {
    await manageNavigation(state, history);
  }
  // Call onMount thunk for the page - we want to load data before the page will be mounted -
  // it allows us to avoid "screen blinking" or display the empty page to the user.
  await getDataBeforeRenderPage({ actions, history, withLoading: false });
  // Finish initialization and hide loader
  setInit(true);
});
