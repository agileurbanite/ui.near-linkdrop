/* eslint-disable */
import { getAccountName } from '../../../../utils/getAccountName';
import { routes } from '../../../../../ui/config/routes';
import { config } from '../../../../../near/config';

const onSuccess = async (state, history, query) => {
  const { replace } = history;
  const accountName = getAccountName(query.account_id);

  try {
    const account = await state.general.entities.near.connection.provider.query({
      request_type: 'view_account',
      finality: 'final',
      account_id: `${accountName}.${config.accounts.linkdrop}`,
    });
    console.log(account);
    // TODO Set info about account into state
    replace(routes.restoreAccess);
  } catch (e) {
    console.log(query.account_id);
    console.log(e);
    replace(routes.createAccount);
  }
};

const onError = (actions, history) => {
  actions.general.setError({
    isError: true,
    description: 'You have not connected your wallet',
  });
  history.replace(routes.connectWallet);
};

export const connectWallet = ({ state, actions, history, query }) => {
  if (query.success) return onSuccess(state, history, query);
  if (query.errorCode) return onError(actions, history);
};
