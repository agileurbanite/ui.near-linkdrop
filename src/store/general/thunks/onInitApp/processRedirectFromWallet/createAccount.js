/* eslint-disable */
import { getAccountName } from '../../../../utils/getAccountName';
import { routes } from '../../../../../ui/config/routes';
import { config } from '../../../../../near/config';

const onSuccess = async (state, history, query) => {
  const { replace } = history;
};

const onError = (actions, history) => {
  const clearTemporaryData = actions.general.clearTemporaryData;
  const setError = actions.general.setError;

  clearTemporaryData();
  setError({
    isError: true,
    description: 'Linkdrop account was not created',
  });
  history.replace(routes.createAccount);
};

export const createAccount = ({ state, actions, history, query }) => {
  console.log('Create Account', query);
  history.replace(routes.campaigns);
  // if (query.errorCode) return onError(actions, history);
  // if (query.transactionHashes) return onSuccess(state, history, query);
};
