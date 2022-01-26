import { routes, memoryRoutes } from '../../../../../config/routes';

const onSuccess = (state, actions, history) => {
  history.replace(routes.createCampaign);
  actions.navigation.navigate({ to: memoryRoutes.createCampaign.nft.creationProgress });
};

// TODO We may have a situation when full access key was added to account but transfer was failed.
//  We may want to handle this - delete full access key from account
const onError = (actions, history) => {
  actions.general.setError({
    isError: true,
    description: 'Campaign was not created, please try again',
  });
  actions.general.clearTemporaryData();
  history.replace(routes.campaigns);
};

export const createNftCampaign = async ({ state, actions, history, query }) => {
  if (query.transactionHashes) onSuccess(state, actions, history);
  if (query.errorCode) onError(actions, history);
};
