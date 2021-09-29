export const initState = {
  isLoading: false,
  error: {
    isError: false,
    description: '',
  },
  modals: {
    createCampaign: null,
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
