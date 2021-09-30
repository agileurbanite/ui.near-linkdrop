import { action } from 'easy-peasy';

export const setError = action((state, payload) => {
  state.error.isError = true;
  state.error.description = payload.description;
});
