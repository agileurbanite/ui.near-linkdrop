import { persist } from 'easy-peasy';
import { initState } from './initState';
import { actions } from './actions';
import { thunks } from './thunks';

export const general = persist(
  {
    ...initState,
    ...actions,
    ...thunks,
  },
  {
    storage: 'localStorage',
    allow: ['temporary'],
  },
);
