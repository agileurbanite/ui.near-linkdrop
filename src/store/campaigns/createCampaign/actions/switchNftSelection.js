import { action } from 'easy-peasy';

export const switchNftSelection = action((state, payload) => {
  const { collectionId, tokenId, selected } = payload;
  state.nft.collections.map[collectionId].tokens.map[tokenId].selected = selected;
});
