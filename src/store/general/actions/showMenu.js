import { action } from 'easy-peasy';

export const showMenu = action((state, payload) => {
  state.isMenuVisible = payload;
});
