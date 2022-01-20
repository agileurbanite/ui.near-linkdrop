/* eslint-disable */
import { thunk } from 'easy-peasy';
import ky from 'ky';
import { nearConfig } from '../../../../config/nearConfig';
import { getNftCollectionContract } from '../../../helpers/getContracts';
import { toCamelCase } from '../../../helpers/toCamelCase';

const isPromiseSuccessful = (status) => status === 'fulfilled';

const findLikelyNFTs = (account) =>
  ky.get(`${nearConfig.helperUrl}/account/${account}/likelyNFTs`, { timeout: 30000 }).json();

const getCollectionsMetadata = async (state, walletAccountId) => {
  const allCollectionsIds = await findLikelyNFTs(walletAccountId);

  const allCollectionsMetadata = await Promise.allSettled(
    allCollectionsIds.map((contractId) =>
      getNftCollectionContract(state, contractId).nft_metadata(),
    ),
  );

  return allCollectionsIds
    .map((collectionId, index) => ({ ...allCollectionsMetadata[index], collectionId }))
    .filter(({ status }) => isPromiseSuccessful(status))
    .map(({ collectionId, value }) => ({ collectionId, metadata: value }));
};

export const onMountSelectNft = thunk(async (_, __, { getStoreState, getStoreActions }) => {
  const state = getStoreState();
  const walletAccountId = state.general.user.wallet.accountId;
  const actions = getStoreActions();

  try {
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

    // console.log('allTokens ', allTokens);
    // console.log('collections ', collections);

    actions.campaigns.createCampaign.setNftCollections(toCamelCase(collections));
  } catch (e) {
    console.log(e);
    actions.general.setError({ isError: true, description: e.message });
  }
});
