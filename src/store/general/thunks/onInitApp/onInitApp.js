import { thunk } from 'easy-peasy';
import { getDataBeforeRenderPage } from '../helpers/getDataBeforeRenderPage';
import { getNearPack } from '../helpers/getNearPack';
import { checkUserExistence } from './checkUserExistence';
import { isRedirect } from './isRedirect';
// import { manageNavigation } from './manageNavigation';
import { processRedirectFromWallet } from './processRedirectFromWallet/processRedirectFromWallet';

export const onInitApp = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { history, setInit } = payload;
  const actions = getStoreActions();
  const setNearPack = actions.general.setNearPack;

  // Create near and wallet instances and set it into the state
  const nearPack = await getNearPack();
  setNearPack(nearPack);
  const state = getStoreState();

  // Check if wallet/linkdrop accounts what is stored in the local storage still exists
  await checkUserExistence(state, actions);

  if (isRedirect(state, history)) {
    // All redirect from NEAR Wallet leads to /redirect-from-wallet route. If it is the case,
    // handle it and redirect the user to the appropriate page.
    await processRedirectFromWallet(state, actions, history);
  } else {
    // Check if a user has access to the page, if not - handle it, for example
    // redirect non-connected user from /campaigns to /connect-wallet.
    // await manageNavigation(state, history);
  }

  // Call onMount thunk for the page - we want to load data before the page will be mounted -
  // it allows us to avoid "screen blinking" or display the empty page to the user.
  await getDataBeforeRenderPage({ actions, history, withLoading: false });

  // Finish initialization and hide loader
  setInit(true);
});
