import { actions } from './actions';
import { initState } from './initState';
import { thunks } from './thunks';

export const root = {
  ...initState,
  ...actions,
  ...thunks,
};
