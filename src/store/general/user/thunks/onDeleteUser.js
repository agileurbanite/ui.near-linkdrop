import { thunk } from 'easy-peasy';
import { Account } from 'near-api-js/lib/account';

export const onDeleteUser = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { history, setLoading } = payload;

  const state = getStoreState();
  const near = state.general.entities.near;
  const walletUserId = state.general.user.wallet.accountId;
  const linkdropUserId = state.general.user.linkdrop.accountId;

  const actions = getStoreActions();

  setLoading(true);
  await new Account(near.connection, linkdropUserId).deleteAccount(walletUserId);
  actions.general.onDisconnect(history);
});
