import { routes } from '../../../../../ui/config/routes';

export const toCreateCampaign = (store, actions, { name, errorCode }, replace) => {
  if (errorCode) {
    actions.general.setError({
      isError: true,
      description: 'The campaign was not created. Please try again',
    });
    return;
  }
  // We want to move campaign from pending to all campaigns only if the name matched
  if (name !== store.campaigns.pendingCampaign.name) return;

  // actions.campaigns.addCampaign({ name });
  // actions.general.addNotification([notifications.successCreateCampaign, name]);
  replace(routes.completeCampaignCreation);
};
