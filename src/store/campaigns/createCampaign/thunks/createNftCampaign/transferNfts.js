import { keyStores } from 'near-api-js';
import { getNear } from '../../../../general/helpers/getNearPack';
import { getNftCollectionContract } from '../../../../helpers/getContracts';
import { setKeyToKeyStore } from '../../../../helpers/setKeyToKeyStore';
import { terraGas } from '../../../../helpers/terraGas';
import { createGetCampaignKeys } from '../../../helpers/keys/createGetCampaignKeys';

// We don't want to show 100% but 99% on the progress bar
const getProgressPercentage = (index, total) => Math.min(Math.trunc((index / total) * 100), 99);

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

  for (let i = 1; i <= tokens.length; i += 1) {
    const [collectionId, tokenId] = tokens[i - 1];
    const collection = getNftCollectionContract(connection, walletAccountId, collectionId);
    const { publicKey } = generateKey(i);

    await collection.nft_transfer_call({
      args: {
        token_id: tokenId,
        receiver_id: campaignId,
        msg: publicKey,
      },
      gas: terraGas(50),
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
    // TODO change campaign status
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
