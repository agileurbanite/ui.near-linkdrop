/* eslint-disable */
import { routes } from '../../../../../ui/config/routes';

const onSuccess = async (history, query) => {
  console.log(query.account_id);
  history.replace(routes.createAccount);
};

const onError = (actions, history) => {
  actions.general.setError({
    isError: true,
    description: 'You have not connected your wallet',
  });
  history.replace(routes.connectWallet);
};

export const connectWallet = async ({ actions, history, query }) => {
  if (query.success) return onSuccess(history, query);
  if (query.errorCode) return onError(actions, history);
};
