import { action } from 'easy-peasy';

export const clearTemporaryData = action((state) => {
  state.temporary = {};
});
