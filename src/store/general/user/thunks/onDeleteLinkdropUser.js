import { thunk } from 'easy-peasy';
import { Account } from 'near-api-js/lib/account';
import { getAccountIdsByPublicKey } from '../helpers/getAccountIdsByPublicKey';
import { getCampaignsIds } from '../helpers/getCampaignsIds';

export const onDeleteLinkdropUser = thunk(
  async (_, payload, { getStoreState, getStoreActions }) => {
    const { history } = payload;

    const state = getStoreState();
    const near = state.general.entities.near;
    const walletUserId = state.general.user.wallet.accountId;
    const linkdropUserId = state.general.user.linkdrop.accountId;
    const publicKey = state.general.user.linkdrop.publicKey;

    const actions = getStoreActions();
    // TODO Rework this
    const accountIds = await getAccountIdsByPublicKey(publicKey);
    const campaignIds = getCampaignsIds(accountIds, linkdropUserId);

    if (campaignIds.length > 0) return;

    await new Account(near.connection, linkdropUserId).deleteAccount(walletUserId);
    actions.general.onDisconnect(history);
  },
);
