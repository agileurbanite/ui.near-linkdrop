import { action } from 'easy-peasy';

export const showModal = action((slice, payload) => {
  const { name, params } = payload;
  slice.modals[name] = params;
});
