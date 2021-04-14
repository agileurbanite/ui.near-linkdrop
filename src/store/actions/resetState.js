import { action } from 'easy-peasy';
import { initState as general } from '../general/initState';
import { initState as campaigns } from '../campaigns/initState';

export const resetState = action((state) => {
  state.general = general;
  state.campaigns = campaigns;
});
