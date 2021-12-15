import qs from 'query-string';

export const routes = {
  // Technical
  root: '/',
  redirectFromWallet: '/redirect-from-wallet',
  // Pages
  connectWallet: '/connect-wallet',
  createAccount: '/create-account',
  restoreAccess: '/restore-access',
  campaigns: '/campaigns',
  settings: '/settings',
  createCampaign: '/create-campaign',
  campaign: '/campaigns/:campaignId',
};

export const getRoute = {
  campaign: (campaignId) => `/campaigns/${campaignId}`,
  callbackUrl: (params) => `${window.location.origin}/redirect-from-wallet?${qs.stringify(params)}`,
};

export const memoryRoutes = {
  createCampaign: {
    selectType: 'create_campaign.select_type',
    near: {
      root: 'create_campaign.near',
      generalData: 'create_campaign.near.general_data',
      summary: 'create_campaign.near.summary',
    },
  },
};
