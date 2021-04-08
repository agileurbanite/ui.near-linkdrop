import { createStore } from 'easy-peasy';
import { actions } from './actions';
import { general } from './general';

export const store = createStore(
  {
    ...actions,
    general,
  },
  {
    name: 'LinkDrop',
  },
);
