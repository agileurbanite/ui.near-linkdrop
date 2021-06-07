import { matchPath } from 'react-router';
import { routes } from '../../../../ui/config/routes';

const { root, connectWallet, campaigns, createCampaign, campaign } = routes;

export const manageNavigation = async (state, history) => {
  const { replace } = history;
  const isConnected = state.general.user.isConnected;

  const match = matchPath(history.location.pathname, {
    path: [root, connectWallet, campaigns, createCampaign, campaign],
    exact: true,
  });
  if (!match) return;

  const isInclude = (_routes) => _routes.includes(match.path);
  // We check if user can reach /redirects-from-wallet in the processRedirectFromWallet module
  // Anon user
  if (!isConnected && isInclude([root, campaigns, createCampaign, campaign])) {
    replace(connectWallet);
  }
  // Connected user
  if (isConnected && isInclude([root, connectWallet])) {
    replace(campaigns);
  }

  // TODO add create-account and restore-access and completeCampaignCreation
  // createAccount -> if user connected and linkdrop account doesnt exist
  // restoreAccess -> if user connected and linkdrop account exist
};
