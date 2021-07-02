import { matchPath } from 'react-router';
import { routes } from '../../../../ui/config/routes';

const { campaign, createCampaign, campaigns } = routes;

/*
  withLoading - we want to disable progress-loading bar when we init app - we already show to user
  full screen spinner
 */

export const getDataBeforeRenderPage = async ({ actions, history, withLoading }) => {
  const enableLoading = actions.general.enableLoading;
  const disableLoading = actions.general.disableLoading;
  const onMountCampaign = actions.campaigns.onMountCampaign;
  const onMountCampaigns = actions.campaigns.onMountCampaigns;

  const match = matchPath(history.location.pathname, {
    path: [campaigns, campaign, createCampaign],
    exact: true,
  });

  if (!match) return;

  withLoading && enableLoading();
  const { path, params } = match;
  const ifRouteIs = (route) => route === path;

  ifRouteIs(campaigns) && (await onMountCampaigns());
  ifRouteIs(campaign) && (await onMountCampaign(params.campaignId));

  withLoading && disableLoading();
};
