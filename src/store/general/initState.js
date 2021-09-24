export const initState = {
  isLoading: false,
  error: {
    isError: false,
    description: '',
  },
  modals: {
    createCampaign: null,
    // createCampaign: {
    //   campaignId: 't3.eclipseer.linkdrop.testnet',
    //   campaignName: 't3',
    //   totalKeys: 10,
    //   // yoctoNearPerKey:,
    //   // campaignAmount:
    // },
    deleteCampaign: null,
    resumeCampaignCreation: null,
  },
  entities: {
    near: null,
    keyStore: null,
    wallet: null,
  },
  temporary: {},
};
