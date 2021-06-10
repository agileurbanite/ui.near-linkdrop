import { thunk } from 'easy-peasy';
import { routes } from '../../../../ui/config/routes';
import { config } from '../../../../near/config';

/*
  Delete linkdrop user account
  1. Delete all campaigns and transfer rest of the tokens to the creator account;
  2. Delete linkdrop account and transfer rest of the tokens to the creator account;
  3. Remove account from LS and disconnect -> redirect to /connect-wallet;
 */

export const onDeleteLinkdropUser = thunk(
  async (_, payload, { getStoreState, getStoreActions }) => {
    const { history } = payload;

    const state = getStoreState();
    const near = state.general.entities.near;
    const wallet = state.general.entities.wallet;
    const keyStore = state.general.entities.keyStore;
    const walletUserId = state.general.user.currentAccount;
    const linkdropUserId = state.general.user.accounts[walletUserId].linkdrop.accountId;

    const actions = getStoreActions();
    const deleteLinkdropUser = actions.general.user.deleteLinkdropUser;

    const account = await near.account(linkdropUserId);

    await account.deleteAccount(walletUserId);
    await keyStore.removeKey(config.networkId, linkdropUserId);
    wallet.signOut();
    deleteLinkdropUser(walletUserId);

    history.push(routes.connectWallet);
  },
);
