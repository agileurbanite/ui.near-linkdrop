/* eslint-disable */
import { thunk } from 'easy-peasy';
import { getNftCollectionContract } from '../../../helpers/getContracts';
import { toCamelCase } from '../../../helpers/toCamelCase';

export const loadMoreNft = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { collectionId } = payload;
  const state = getStoreState();
  const walletAccountId = state.general.user.wallet.accountId;

  const actions = getStoreActions();
  const addMoreNftToCollection = actions.campaigns.createCampaign.addMoreNftToCollection;
  const setError = actions.general.setError;
  const enableLoading = actions.general.enableLoading;
  const disableLoading = actions.general.disableLoading;

  const collectionContract = getNftCollectionContract(state, collectionId);

  try {
    enableLoading();

    const tokens = await collectionContract.nft_tokens_for_owner({
      account_id: walletAccountId,
      from_index: '10',
      limit: 10,
    });

    console.log('tokens ', tokens);

    addMoreNftToCollection({ tokens: toCamelCase(tokens), collectionId });
  } catch (e) {
    console.log(e);
    setError({ isError: true, description: e.message });
  } finally {
    disableLoading();
  }
});
