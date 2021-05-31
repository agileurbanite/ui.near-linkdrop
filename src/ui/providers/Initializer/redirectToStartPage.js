import { matchPath } from 'react-router';
import { routes } from '../../config/routes';

const { root, connectWallet, campaigns, createCampaign, campaign } = routes;

export const redirectToStartPage = (history, _store) => {
  const { replace } = history;
  const store = _store.getState();
  const isConnected = store.general.user.isConnected;

  const match = matchPath(history.location.pathname, {
    path: [root, connectWallet, campaigns, createCampaign, campaign],
    exact: true,
  });
  if (!match) return;

  const isInclude = (_routes) => _routes.includes(match.path);

  // Anon user
  // TODO add create-account and restore-access
  if (!isConnected && isInclude([root, campaigns, createCampaign, campaign])) {
    replace(connectWallet);
  }
  // Connected user
  if (isConnected && isInclude([root, connectWallet])) {
    replace(campaigns);
  }
};
