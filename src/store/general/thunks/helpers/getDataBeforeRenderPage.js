import { matchPath } from 'react-router';
import { routes } from '../../../../ui/config/routes';

const { campaign } = routes;

export const getDataBeforeRenderPage = async (actions, history, withLoading) => {
  const enableLoading = actions.general.enableLoading;
  const disableLoading = actions.general.disableLoading;
  const onMountCampaign = actions.campaigns.onMountCampaign;
  const match = matchPath(history.location.pathname, [campaign]);
  if (!match) return;

  withLoading && enableLoading();
  const { path, params } = match;
  const ifRouteIs = (route) => route === path;

  ifRouteIs(campaign) && (await onMountCampaign(params.campaignId));

  withLoading && disableLoading();
};
