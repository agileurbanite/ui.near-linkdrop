import { onMountSelectNft } from './onMountSelectNft';
import { prepareForNft } from './prepareForNft';
import { createNftCampaign } from './createNftCampaign';
import { transferNft } from './transferNft';

export const thunks = {
  onMountSelectNft,
  prepareForNft,
  createNftCampaign,
  transferNft,
};

/*
  prepareForNftCampaignCreation - send NEAR to neardrop + add collections access keys for transfer NFTs
  createNftCampaignAccount - create account, deploy contract and call user callback
  transferNftsOwnershipToCampaign - transfer all selected NFTs to campaign
 */
