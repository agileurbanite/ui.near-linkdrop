import { thunk } from 'easy-peasy';

export const onLoadAccountBalance = thunk(async (_, __, { getStoreActions, getStoreState }) => {
  const state = getStoreState();
  const wallet = state.general.entities.wallet;
  const actions = getStoreActions();
  const setAccountBalance = actions.general.setAccountBalance;

  const balance = await wallet.account().getAccountBalance();
  setAccountBalance(balance);
});
