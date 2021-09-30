import { isAccountExist } from '../../helpers/isAccountExist';

// We want to avoid situations when connected accounts were deleted but
// UI doesn't know about this.

export const checkUserAccounts = async (state, actions, history) => {
  const wallet = state.general.user.wallet;
  const linkdrop = state.general.user.linkdrop;

  const [isWalletAccount, isLinkdropAccount] = await Promise.all([
    isAccountExist(state, wallet.accountId),
    isAccountExist(state, linkdrop.accountId),
  ]);

  if ((wallet.isConnected && !isWalletAccount) || (linkdrop.isExist && !isLinkdropAccount)) {
    actions.general.onDisconnect(history);
  }
};
