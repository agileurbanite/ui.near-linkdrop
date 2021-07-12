import { action } from 'easy-peasy';

export const hideModal = action((slice, payload) => {
  const { name } = payload;
  delete slice.modals[name];
});
