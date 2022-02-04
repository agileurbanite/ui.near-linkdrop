import { keyStores } from 'near-api-js';
import { terraGas } from '../../../../helpers/terraGas';
import { getNftCollectionContract } from '../../../../helpers/getContracts';
import { createGetCampaignKeys } from '../../../helpers/createGetCampaignKeys';
import { getNear } from '../../../../general/helpers/getNearPack';
import { setKeyToKeyStore } from '../../../../helpers/setKeyToKeyStore';

const getProgressPercentage = (index, total) =>
  Math.min(Math.trunc(((index + 1) / total) * 100), 99);

// TODO Think about how we can speed up transfer process
async function* createGenerator(
  tokens,
  mnemonic,
  connection,
  walletAccountId,
  campaignId,
  createdAt,
) {
  const generateKey = createGetCampaignKeys(mnemonic, campaignId, createdAt);

  for (let i = 0; i < tokens.length; i += 1) {
    const [collectionId, tokenId] = tokens[i];
    const collection = getNftCollectionContract(connection, walletAccountId, collectionId);
    const { publicKey } = generateKey(i);

    await collection.nft_transfer_call({
      args: {
        token_id: tokenId,
        receiver_id: campaignId,
        msg: publicKey,
      },
      gas: terraGas(40),
      amount: 1,
    });

    yield i;
  }
}

export const transferNfts = async (
  tokens,
  campaignId,
  createdAt,
  setProgress,
  walletAccountId,
  walletFullAccessKey,
  mnemonic,
) => {
  const keyStore = new keyStores.InMemoryKeyStore();
  await setKeyToKeyStore(keyStore, walletAccountId, walletFullAccessKey.secretKey);
  const near = await getNear(keyStore);

  try {
    const generator = createGenerator(
      tokens,
      mnemonic,
      near.connection,
      walletAccountId,
      campaignId,
      createdAt,
    );

    for await (const index of generator) {
      setProgress(getProgressPercentage(index, tokens.length));
    }
  } catch (e) {
    /* eslint-disable no-console */
    console.log(e);
  }
};
