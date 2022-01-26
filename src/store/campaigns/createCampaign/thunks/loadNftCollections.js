/* eslint-disable */
import { thunk } from 'easy-peasy';
import ky from 'ky';
import { nearConfig } from '../../../../config/nearConfig';
import { memoryRoutes } from '../../../../config/routes';
import { getNftCollectionContract } from '../../../helpers/getContracts';
import { toCamelCase } from '../../../helpers/toCamelCase';

const isPromiseSuccessful = (status) => status === 'fulfilled';

const getCollectionsMetadata = async (state, walletAccountId) => {
  const allCollectionsIds = await ky
    .get(`${nearConfig.helperUrl}/account/${walletAccountId}/likelyNFTs`, { timeout: 30000 })
    .json();

  const allCollectionsMetadata = await Promise.allSettled(
    allCollectionsIds.map((contractId) =>
      getNftCollectionContract(
        state.general.entities.near.connection,
        walletAccountId,
        contractId,
      ).nft_metadata(),
    ),
  );

  return allCollectionsIds
    .map((collectionId, index) => ({ ...allCollectionsMetadata[index], collectionId }))
    .filter(({ status }) => isPromiseSuccessful(status))
    .map(({ collectionId, value }) => ({ collectionId, metadata: value }));
};

export const loadNftCollections = thunk(async (_, __, { getStoreState, getStoreActions }) => {
  const state = getStoreState();
  const walletAccountId = state.general.user.wallet.accountId;

  const actions = getStoreActions();
  const setNftCollections = actions.campaigns.createCampaign.setNftCollections;
  const setError = actions.general.setError;
  const enableLoading = actions.general.enableLoading;
  const disableLoading = actions.general.disableLoading;
  const navigate = actions.navigation.navigate;

  try {
    enableLoading();
    const collectionsMetadata = await getCollectionsMetadata(state, walletAccountId);

    const allTokens = await Promise.allSettled(
      collectionsMetadata.map(({ collectionId }) =>
        getNftCollectionContract(state, collectionId).nft_tokens_for_owner({
          account_id: walletAccountId,
          from_index: '0',
          limit: 10,
        }),
      ),
    );

    const collections = collectionsMetadata
      .map((data, index) => ({ ...data, ...allTokens[index] }))
      .filter(({ status }) => isPromiseSuccessful(status))
      .map(({ collectionId, value, metadata }) => ({ collectionId, metadata, tokens: value }));

    console.log('allTokens ', allTokens);
    console.log('collections ', collections);

    setNftCollections(toCamelCase(collections));
    navigate({ to: memoryRoutes.createCampaign.nft.selectNft });
  } catch (e) {
    console.log(e);
    setError({ isError: true, description: e.message });
  } finally {
    disableLoading();
  }
});
