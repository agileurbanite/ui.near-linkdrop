import { action } from 'easy-peasy';

export const setHistory = action((state, payload) => {
  state.history = payload;
});
