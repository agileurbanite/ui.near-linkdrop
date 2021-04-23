import { routes } from '../../../../ui/config/routes';
import { notifications } from '../../../../ui/config/notifacations';

export const handleCreateCampaign = (store, actions, { campaignId, errorCode }, replace) => {
  if (errorCode) {
    actions.general.setError({
      isError: true,
      description: 'The campaign was not created. Please try again',
    });
    return;
  }
  // We want to move campaign from pending to all campaigns only if id matched
  if (campaignId !== store.campaigns.pendingCampaign.campaignId) return;

  actions.campaigns.addCampaign({ campaignId });
  actions.general.addNotification([notifications.successCreateCampaign, campaignId]);
  replace(routes.campaigns);
};
