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
  claim: '/claim/:contractId/:secretKey'
};

export const getRoute = {
  campaign: (campaignId) => `/campaigns/${campaignId}`,
  callbackUrl: (params) => `${window.location.origin}/redirect-from-wallet?${qs.stringify(params)}`,
};

// TODO generate paths (like 'a_b.c') automatically from object, writing
//  'aB: { c: 'a_b.c' }' is boring
export const memoryRoutes = {
  createCampaign: {
    selectType: 'create_campaign.select_type',
    near: {
      root: 'create_campaign.near',
      generalData: 'create_campaign.near.general_data',
      summary: 'create_campaign.near.summary',
      creationProgress: 'create_campaign.near.creation_progress',
    },
    nft: {
      root: 'create_campaign.nft',
      campaignData: 'create_campaign.nft.campaign_data',
      selectNft: 'create_campaign.nft.select_nft',
      summary: 'create_campaign.nft.summary',
      creationProgress: 'create_campaign.nft.creation_progress',
    },
  },
};
