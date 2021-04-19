import { action } from 'easy-peasy';

export const initNear = action((state, payload) => {
  const { near, keyStore, wallet, user } = payload;

  state.user = user;
  state.entities.near = near;
  state.entities.keyStore = keyStore;
  state.entities.wallet = wallet;
});
