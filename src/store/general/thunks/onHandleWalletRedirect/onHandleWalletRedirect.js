import { thunk } from 'easy-peasy';
import { matchPath } from 'react-router';
import qs from 'query-string';
import { handleConnectWallet } from './handleConnectWallet';
import { handleCreateCampaign } from './handleCreateCampaign';
import { routes as routesConfig } from '../../../../ui/config/routes';

const { connectWallet, createCampaign } = routesConfig;

export const onHandleWalletRedirect = thunk(
  async (_, history, { getStoreActions, getStoreState }) => {
    const { replace } = history;
    const { search, pathname } = history.location;
    const state = getStoreState();
    const actions = getStoreActions();

    // If we don't have any query param just skip this function
    if (search === '') return;

    const queryParams = qs.parse(search);
    replace(pathname);  // We want to remove all query params from url to keep it clean

    const match = matchPath(pathname, {
      path: [connectWallet, createCampaign],
      exact: true,
    });

    const ifRouteIs = (route) => route === match?.path;

    /**
     * Redirect leads here if:
     * 1. User got an error or deny connect on the wallet side - show modal with an error
     * 2. User successfully connected his NEAR account with Linkdrop - check if his NEAR account
     * has associated Linkdrop account, than redirect to Create Account or Restore Account
     */
    if (ifRouteIs(connectWallet)) {
      await handleConnectWallet({ actions, queryParams, replace });
      return;
    }

    if (ifRouteIs(createCampaign)) {
      handleCreateCampaign(state, actions, queryParams, replace);
      return;
    }

    if (queryParams.errorCode) {
      actions.general.setError({
        isError: true,
        description: 'Your transaction was not completed. Please try again',
      });
    }
  },
);
