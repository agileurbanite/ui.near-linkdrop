import { action } from 'easy-peasy';

export const addMoreNftToCollection = action((state, payload) => {
  const { tokens, collectionId } = payload;

  const _tokens = state.nft.collections.map[collectionId].tokens;
  tokens.forEach((token) => {
    const { tokenId } = token;
    _tokens.list.push(tokenId);
    _tokens.map[tokenId] = {
      ...token,
      selected: false,
    };
  });
});
