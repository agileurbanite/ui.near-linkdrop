import { action } from 'easy-peasy';

export const setNftCollections = action((state, payload) => {
  payload.forEach((collection) => {
    const { collectionId, metadata, tokens } = collection;

    const _collections = state.nft.collections;
    _collections.list.push(collectionId);
    _collections.map[collectionId] = {
      collectionId,
      metadata,
      tokens: {
        list: [],
        map: {},
      },
    };

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
});
