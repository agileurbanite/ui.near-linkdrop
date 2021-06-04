import { matchPath } from 'react-router';
import qs from 'query-string';
import { connectWallet } from './connectWallet';
import { routes } from '../../../../../ui/config/routes';

const isValidPath = (history) => {
  const { search, pathname } = history.location;
  const match = matchPath(pathname, { path: routes.redirectFromWallet, exact: true });
  // Add the check if we wait for redirect (have some data is the state and LS)
  return search !== '' && match;
};

export const processRedirectFromWallet = async (state, actions, history) => {
  if (!isValidPath(history)) return;
  const query = qs.parse(history.location.search);

  if (query.connectWallet) await connectWallet({ state, actions, history, query });
};

// if (queryParams.errorCode) {
//   actions.general.setError({
//     isError: true,
//     description: 'Transaction was failed. Please try again',
//   });
// }
