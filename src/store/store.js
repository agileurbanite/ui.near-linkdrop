import { createStore } from 'easy-peasy';
import { actions } from './actions';
import { general } from './general/general';
import { navigation } from './navigation';
import { campaigns } from './campaigns/campaigns';
import { settings } from './settings';

export const store = createStore(
  {
    ...actions,
    general,
    navigation,
    campaigns,
    settings,
  },
  {
    name: 'LinkDrop',
  },
);
