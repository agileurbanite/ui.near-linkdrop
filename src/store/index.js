import { createStore } from 'easy-peasy';
import { actions } from './actions';
import { general } from './general';
import { campaigns } from './campaigns';
import { settings } from './settings';

export const store = createStore(
  {
    ...actions,
    general,
    campaigns,
    settings,
  },
  {
    name: 'LinkDrop',
  },
);
