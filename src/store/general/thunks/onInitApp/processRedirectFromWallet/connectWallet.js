import { getLinkdropUserAccountId } from '../../helpers/getLinkdropUserAccountId';
import { isAccountExist } from '../../helpers/isAccountExist';
import { routes } from '../../../../../config/routes';

const onSuccess = async (state, actions, history, query) => {
  const walletAccountId = query.account_id;
  const linkdropUserAccountId = getLinkdropUserAccountId(walletAccountId);
  const isLinkdropUser = await isAccountExist(state.general.entities.near, linkdropUserAccountId);
  const destination = isLinkdropUser ? routes.restoreAccess : routes.createAccount;

  actions.general.user.setWalletAccount({ walletAccountId, linkdropUserAccountId, isLinkdropUser });
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
