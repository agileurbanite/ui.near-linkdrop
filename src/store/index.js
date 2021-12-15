import { createStore } from 'easy-peasy';
import { actions } from './actions';
import { general } from './general';
import { navigation } from './navigation';
import { campaigns } from './campaigns';
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
