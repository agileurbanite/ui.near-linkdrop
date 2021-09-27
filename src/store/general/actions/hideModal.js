import { action } from 'easy-peasy';

export const hideModal = action((slice, payload) => {
  slice.modals[payload] = null;
});
