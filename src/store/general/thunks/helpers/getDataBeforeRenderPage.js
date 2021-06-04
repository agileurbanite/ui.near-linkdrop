import { matchPath } from 'react-router';
import { routes } from '../../../../ui/config/routes';

const { campaign, createCampaign, campaigns } = routes;

export const getDataBeforeRenderPage = async ({ actions, history, withLoading }) => {
  const enableLoading = actions.general.enableLoading;
  const disableLoading = actions.general.disableLoading;
  const onLoadAccountBalance = actions.general.onLoadAccountBalance;
  const onMountCampaign = actions.campaigns.onMountCampaign;

  const match = matchPath(history.location.pathname, {
    path: [campaigns, campaign, createCampaign],
    exact: true,
  });

  if (!match) return;

  withLoading && enableLoading();
  const { path, params } = match;
  const ifRouteIs = (route) => route === path;

  // Probably we can load the account balance only when app started and if user redirect to the
  // create campaign page
  await onLoadAccountBalance();

  ifRouteIs(campaign) && (await onMountCampaign(params.campaignId));

  withLoading && disableLoading();
};
