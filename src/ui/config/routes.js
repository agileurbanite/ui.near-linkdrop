export const routes = {
  root: '/',
  connectWallet: '/connect-wallet',
  campaigns: '/campaigns',
  createCampaign: '/create-campaign',
  campaign: '/campaigns/:campaignId',
};

export const getRoute = {
  campaign: (campaignId) => `/campaigns/${campaignId}`,
};
