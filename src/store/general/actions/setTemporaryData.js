import { action } from 'easy-peasy';

export const setTemporaryData = action((state, payload) => {
  state.temporary = payload;
});
