import { modals } from '../../../../../config/modals';
import { routes } from '../../../../../config/routes';

const onSuccess = (state, actions, history) => {
  actions.general.showModal({ name: modals.createCampaign, params: state.general.temporary });
  actions.general.clearTemporaryData();
  history.replace(routes.createCampaign);
};

const onError = (actions, history) => {
  actions.general.setError({
    isError: true,
    description: 'Campaign account was not created',
  });
  actions.general.clearTemporaryData();
  history.replace(routes.createCampaign);
};

export const createNearCampaign = async ({ state, actions, history, query }) => {
  if (query.transactionHashes) onSuccess(state, actions, history);
  if (query.errorCode) onError(actions, history);
};
