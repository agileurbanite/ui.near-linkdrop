import { initState } from './initState';
import { actions } from './actions';
import { thunks } from './thunks';
import { createCampaign } from './createCampaign';

export const campaigns = {
  ...initState,
  ...actions,
  ...thunks,
  createCampaign,
};
