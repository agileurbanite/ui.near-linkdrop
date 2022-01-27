import { action } from 'easy-peasy';

export const setNftCampaignMetadata = action((state, payload) => {
  state.nft.campaignName = payload.campaignName;
  state.nft.linkRedirectUrl = payload.linkRedirectUrl;
});
