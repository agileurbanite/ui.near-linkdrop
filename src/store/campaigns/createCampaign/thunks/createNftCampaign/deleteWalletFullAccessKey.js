import { keyStores, Account } from 'near-api-js';
import { getNear } from '../../../../general/helpers/getNearPack';
import { setKeyToKeyStore } from '../../../../helpers/setKeyToKeyStore';

export const deleteWalletFullAccessKey = async (walletAccountId, walletFullAccessKey) => {
  const keyStore = new keyStores.InMemoryKeyStore();
  await setKeyToKeyStore(keyStore, walletAccountId, walletFullAccessKey.secretKey);
  const near = await getNear(keyStore);

  const walletAccount = new Account(near.connection, walletAccountId);
  await walletAccount.deleteKey(walletFullAccessKey.publicKey);
};
