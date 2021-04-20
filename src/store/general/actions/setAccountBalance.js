import { action } from 'easy-peasy';

export const setAccountBalance = action((state, payload) => {
  state.user.balance = payload.available;
});
