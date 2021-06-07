import { matchPath } from 'react-router';
import qs from 'query-string';
import { connectWallet } from './connectWallet';
import { createAccount } from './createAccount';
import { routes } from '../../../../../ui/config/routes';

const isValidPath = (state, history, redirectAfter) => {
  const { search, pathname } = history.location;
  const match = matchPath(pathname, {
    path: routes.redirectFromWallet,
    exact: true,
  });

  return search !== '' && match && typeof state.general.temporary[redirectAfter] === 'object';
};

export const processRedirectFromWallet = async (state, actions, history) => {
  const query = qs.parse(history.location.search);
  const { redirectAfter } = query;

  if (!isValidPath(state, history, redirectAfter)) return;
  if (query.connectWallet) await connectWallet({ state, actions, history, query });
  if (redirectAfter === 'createAccount') await createAccount({ state, actions, history, query });
};
