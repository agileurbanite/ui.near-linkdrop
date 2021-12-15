import { action } from 'easy-peasy';

export const navigate = action((state, payload) => {
  state.path = payload.to;
});
