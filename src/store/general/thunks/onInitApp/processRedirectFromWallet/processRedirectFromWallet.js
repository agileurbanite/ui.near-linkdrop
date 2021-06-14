import qs from 'query-string';
import { connectWallet } from './connectWallet';
import { createAccount } from './createAccount';
import { createNearCampaign } from './createNearCampaign';
import { redirectActions } from '../../../../../config/redirectActions';

export const processRedirectFromWallet = async (state, actions, history) => {
  const query = qs.parse(history.location.search);
  const { redirectAction } = query;

  if (redirectAction === redirectActions.connectWallet)
    await connectWallet({ state, actions, history, query });

  if (redirectAction === redirectActions.createAccount)
    await createAccount({ state, actions, history, query });

  if (redirectAction === redirectActions.createNearCampaign)
    await createNearCampaign({ state, actions, history, query });
};
