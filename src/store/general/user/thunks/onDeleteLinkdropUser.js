import { thunk } from 'easy-peasy';
import { Account } from 'near-api-js/lib/account';
import { routes } from '../../../../config/routes';
import { getAccountIdsByPublicKey } from '../helpers/getAccountIdsByPublicKey';
import { getCampaignsIds } from '../helpers/getCampaignsIds';
import { config } from '../../../../near/config';

export const onDeleteLinkdropUser = thunk(
  async (_, payload, { getStoreState, getStoreActions }) => {
    const { history } = payload;

    const state = getStoreState();
    const near = state.general.entities.near;
    const wallet = state.general.entities.wallet;
    const keyStore = state.general.entities.keyStore;
    const walletUserId = state.general.user.currentAccount;
    const linkdropUserId = state.general.user.accounts[walletUserId].linkdrop.accountId;
    const publicKey = state.general.user.accounts[walletUserId].linkdrop.publicKey;

    const actions = getStoreActions();
    const deleteLinkdropUser = actions.general.user.deleteLinkdropUser;

    const accountIds = await getAccountIdsByPublicKey(publicKey);
    const campaignIds = getCampaignsIds(accountIds, linkdropUserId);

    if (campaignIds.length > 0) return;

    const account = new Account(near.connection, linkdropUserId)
    await account.deleteAccount(walletUserId);
    await keyStore.removeKey(config.networkId, linkdropUserId);

    wallet.signOut();
    deleteLinkdropUser(walletUserId);
    history.push(routes.connectWallet);
  },
);
