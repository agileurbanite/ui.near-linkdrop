import { nearConfig } from '../../../../../config/nearConfig';
import { getAccountName } from '../../../../helpers/getAccountName';
import { isAccountExist } from '../../../helpers/isAccountExist';
import { routes } from '../../../../../config/routes';

const onSuccess = async (state, actions, history, query) => {
  const walletAccountId = query.account_id;
  // TODO rework and search account by public key
  const linkdropUserAccountId = `${getAccountName(walletAccountId)}.${
    nearConfig.accounts.linkdrop
  }`;
  const isLinkdropUser = await isAccountExist(state, linkdropUserAccountId);
  const destination = isLinkdropUser ? routes.restoreAccess : routes.createAccount;

  actions.general.user.setUserData({
    wallet: {
      accountId: walletAccountId,
      isConnected: true,
    },
    linkdrop: {
      accountId: linkdropUserAccountId,
      isExist: isLinkdropUser,
    },
  });

  history.replace(destination);
};

const onError = (actions, history) => {
  actions.general.setError({
    isError: true,
    description: 'You have not connected your wallet',
  });
  // TODO add check if user has already connected accounts (for the future feature - multi-accounts)
  history.replace(routes.connectWallet);
};

export const connectWallet = async ({ state, actions, history, query }) => {
  actions.general.clearTemporaryData();
  if (query.account_id) await onSuccess(state, actions, history, query);
  if (query.errorCode) onError(actions, history);
};
