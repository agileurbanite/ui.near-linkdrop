import { onMountSelectNft } from './onMountSelectNft';
import { prepareForNftCampaignCreation } from './prepareForNftCampaignCreation';
import { createNftCampaign } from './createNftCampaign';
import { transferNftsOwnershipToCampaign } from './transferNftsOwnershipToCampaign';

export const thunks = {
  onMountSelectNft,
  prepareForNftCampaignCreation,
  createNftCampaign,
  transferNftsOwnershipToCampaign,
};

/*
  prepareForNftCampaignCreation - send NEAR to neardrop + add collections access keys for transfer NFTs
  createNftCampaignAccount - create account, deploy contract and call user callback
  transferNftsOwnershipToCampaign - transfer all selected NFTs to campaign
 */
