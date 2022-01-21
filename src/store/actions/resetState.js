import { action } from 'easy-peasy';
import { initState as general } from '../general/initState';
import { initState as campaigns } from '../campaigns/initState';
import { initState as user } from '../general/user/initState';
import { initState as settings } from '../settings/initState';

export const resetState = action((state) => {
  state.general = general;
  state.general.user = user;
  state.campaigns = campaigns;
  state.settings = settings;
});
