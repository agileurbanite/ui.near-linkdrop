import { loadNftCollections } from './loadNftCollections';
import { loadMoreNft } from './loadMoreNft';
import { prepareForNft } from './prepareForNft';
import { createNftCampaign } from './createNftCampaign';
import { transferNft } from './transferNft';

export const thunks = {
  loadNftCollections,
  loadMoreNft,
  prepareForNft,
  createNftCampaign,
  transferNft,
};
