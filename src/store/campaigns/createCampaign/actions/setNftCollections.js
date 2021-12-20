import { action } from 'easy-peasy';

export const setNftCollections = action((state, payload) => {
  state.nft.collections = payload;
});
