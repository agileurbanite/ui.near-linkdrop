import { keyStores } from 'near-api-js';
import { terraGas } from '../../../../helpers/terraGas';
import { getNftCollectionContract } from '../../../../helpers/getContracts';
import { createGenerateKeyV2 } from '../../../helpers/createGenerateKeyV2';
import { getNear } from '../../../../general/helpers/getNearPack';
import { setKeyToKeyStore } from '../../../../helpers/setKeyToKeyStore';

// TODO Think how we can speed up transfer process
async function* createGenerator(tokens, mnemonic, connection, walletAccountId, campaignId) {
  const generateKey = createGenerateKeyV2(mnemonic, campaignId);

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
    // We return key order (like 1, 2, 3)
    yield i + 1;
  }
}

const getProgressPercentage = (order, total) => Math.min(Math.trunc((order / total) * 100), 99);

export const transferNfts = async (state, tokens, campaignId, setProgress, fullAccessKey) => {
  const walletAccountId = state.general.user.wallet.accountId;
  const mnemonic = state.general.user.linkdrop.mnemonic;

  const keyStore = new keyStores.InMemoryKeyStore();
  await setKeyToKeyStore(keyStore, walletAccountId, fullAccessKey.secretKey);
  const near = await getNear(keyStore);

  try {
    const generator = createGenerator(
      tokens,
      mnemonic,
      near.connection,
      walletAccountId,
      campaignId,
    );

    for await (const order of generator) {
      setProgress(getProgressPercentage(order, tokens.length));
    }
  } catch (e) {
    /* eslint-disable no-console */
    console.log(e);
  }
};
