import { matchPath } from 'react-router';
import { routes } from '../../../../ui/config/routes';

const { campaign, createCampaign } = routes;

export const getDataBeforeRenderPage = async ({
  actions,
  history,
  withLoading,
  shouldLoadAccountBalance,
}) => {
  const enableLoading = actions.general.enableLoading;
  const disableLoading = actions.general.disableLoading;
  const onLoadAccountBalance = actions.general.onLoadAccountBalance;
  const onMountCampaign = actions.campaigns.onMountCampaign;

  const match = matchPath(history.location.pathname, [campaign, createCampaign]);
  if (!match) return;

  withLoading && enableLoading();
  const { path, params } = match;
  const ifRouteIs = (route) => route === path;

  // We don't want to load balance twice if a user comes directly to the create campaign page because
  // we always load the balance before app initialization
  if (ifRouteIs(createCampaign) && shouldLoadAccountBalance) await onLoadAccountBalance();
  ifRouteIs(campaign) && (await onMountCampaign(params.campaignId));

  withLoading && disableLoading();
};
