import { action } from 'easy-peasy';
import { initState as general } from '../general/initState';

export const resetState = action((state) => {
  state.general = general;
});
