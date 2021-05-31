import { initState } from './initState';
import { actions } from './actions';
import { thunks } from './thunks';

export const campaigns = {
  ...initState,
  ...actions,
  ...thunks,
};
