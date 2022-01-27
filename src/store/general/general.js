import { persist } from 'easy-peasy';
import { initState } from './initState';
import { actions } from './actions';
import { thunks } from './thunks';
import { user } from './user';

export const general = persist(
  {
    ...initState,
    ...actions,
    ...thunks,
    user,
  },
  {
    storage: 'localStorage',
    allow: ['user', 'temporary'],
  },
);
