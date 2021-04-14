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
    const { errorCode } = queryParams;
    // We want to remove all query params from url and keep it clean
    replace(pathname);

    const match = matchPath(pathname, {
      path: [connectWallet, createCampaign],
      exact: true,
    });

    const ifRouteIs = (route) => route === match?.path;

    if (ifRouteIs(connectWallet)) {
      handleConnectWallet(actions, queryParams);
      return;
    }
    if (ifRouteIs(createCampaign)) {
      handleCreateCampaign(state, actions, queryParams, replace);
      return;
    }

    if (errorCode) {
      actions.general.setError({
        isError: true,
        description: 'Your transaction was not completed. Please try again',
      });
    }
  },
);
