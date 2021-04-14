import { createStore } from 'easy-peasy';
import { actions } from './actions';
import { general } from './general';
import { campaigns } from './campaigns';

export const store = createStore(
  {
    ...actions,
    general,
    campaigns,
  },
  {
    name: 'LinkDrop',
  },
);
