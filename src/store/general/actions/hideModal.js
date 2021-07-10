import { action } from 'easy-peasy';

export const hideModal = action((slice, modal) => {
  delete slice.modals[modal];
});
