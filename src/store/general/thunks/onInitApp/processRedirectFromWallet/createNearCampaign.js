import { routes } from '../../../../../config/routes';

const onSuccess = (history) => {
  history.replace(routes.completeCampaignCreation);
};

const onError = (actions, history) => {
  actions.general.setError({
    isError: true,
    description: 'Campaign account was not created',
  });
  actions.general.clearTemporaryData();
  history.replace(routes.createCampaign);
};

export const createNearCampaign = async ({ actions, history, query }) => {
  if (query.transactionHashes) onSuccess(history);
  if (query.errorCode) onError(actions, history);
};
