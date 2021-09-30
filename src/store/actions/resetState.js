import { action } from 'easy-peasy';
import { initState as general } from '../general/initState';
import { initState as campaigns } from '../campaigns/initState';
import { initState as user } from '../general/user/initState';

export const resetState = action((state) => {
  state.general = general;
  state.general.user = user;
  state.campaigns = campaigns;
});
