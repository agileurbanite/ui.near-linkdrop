import { thunk } from 'easy-peasy';

export const transferNftsOwnershipToCampaign = thunk(
  async (_, __, { getStoreState, getStoreActions }) => {
    const state = getStoreState();
    console.log('transferNftsOwnershipToCampaign');
  },
);
