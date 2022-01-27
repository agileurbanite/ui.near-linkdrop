import { thunk } from 'easy-peasy';
import { transactions } from 'near-api-js';
import { PublicKey, KeyPair } from 'near-api-js/lib/utils';
import { createTransaction } from 'near-api-js/lib/transaction';
import { base_decode as baseDecode } from 'near-api-js/lib/utils/serialize';
import { parseNearAmount } from 'near-api-js/lib/utils/format';
import { redirectActions } from '../../../../config/redirectActions';
import { getRoute } from '../../../../config/routes';

const redirectAction = redirectActions.createNftCampaign;

const getTxParams = async (near, wallet, signerId) => {
  const localKey = await near.connection.signer.getPublicKey(signerId, near.connection.networkId);
  const accessKey = await wallet.account().accessKeyForTransaction(signerId, [], localKey);
  const block = await near.connection.provider.block({ finality: 'final' });

  return {
    blockHash: baseDecode(block.header.hash),
    publicKey: PublicKey.from(accessKey.public_key),
    nonce: accessKey.access_key.nonce,
  };
};

const getSelectedTokens = (collections) =>
  collections.list.reduce((acc, collectionId) => {
    const tokens = collections.map[collectionId].tokens;
    tokens.list.forEach((tokenId) => {
      if (tokens.map[tokenId].selected) acc.push([collectionId, tokenId]);
    });
    return acc;
  }, []);

export const prepareNftCampaignCreation = thunk(
  async (_, __, { getStoreState, getStoreActions }) => {
    const state = getStoreState();
    const walletAccountId = state.general.user.wallet.accountId;
    const linkdropAccountId = state.general.user.linkdrop.accountId;
    const wallet = state.general.entities.wallet;
    const near = state.general.entities.near;
    const campaignName = state.campaigns.createCampaign.nft.campaignName;
    const linkRedirectUrl = state.campaigns.createCampaign.nft.linkRedirectUrl;
    const collections = state.campaigns.createCampaign.nft.collections;

    const actions = getStoreActions();
    const setTemporaryData = actions.general.setTemporaryData;

    try {
      const deposit = parseNearAmount('5'); // TODO use a real deposit
      const key = KeyPair.fromRandom('ed25519');

      setTemporaryData({
        redirectAction,
        campaignName,
        linkRedirectUrl,
        walletFullAccessKey: {
          publicKey: key.getPublicKey().toString(),
          secretKey: key.toString(),
        },
        deposit,
        tokens: getSelectedTokens(collections),
      });

      const { blockHash, publicKey, nonce } = await getTxParams(near, wallet, walletAccountId);

      wallet.requestSignTransactions({
        transactions: [
          createTransaction(
            walletAccountId,
            publicKey,
            linkdropAccountId,
            nonce + 1,
            [transactions.transfer(deposit)],
            blockHash,
          ),
          createTransaction(
            walletAccountId,
            publicKey,
            walletAccountId,
            nonce + 2,
            [transactions.addKey(key.getPublicKey(), transactions.fullAccessKey())],
            blockHash,
          ),
        ],
        callbackUrl: getRoute.callbackUrl({ redirectAction }),
      });
    } catch (e) {
      /* eslint-disable no-console */
      console.log(e);
      actions.general.setError({ isError: true, description: e.message });
    }
  },
);
