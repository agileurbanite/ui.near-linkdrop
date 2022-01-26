import { loadNftCollections } from './loadNftCollections';
import { loadMoreNft } from './loadMoreNft';
import { prepareNftCampaignCreation } from './prepareNftCampaignCreation';
import { createNftCampaign } from './createNftCampaign/createNftCampaign';

export const thunks = {
  loadNftCollections,
  loadMoreNft,
  prepareNftCampaignCreation,
  createNftCampaign,
};
