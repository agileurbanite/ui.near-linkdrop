import { connect, keyStores, WalletConnection } from 'near-api-js';
import { nearConfig } from '../../../config/nearConfig';

const { networkId, nodeUrl, walletUrl } = nearConfig;

export const getNear = async (keyStore) =>
  connect({
    networkId,
    nodeUrl,
    walletUrl,
    keyStore,
  });

export const getNearPack = async () => {
  // TODO Consider using InMemoryStorage instead
  const keyStore = new keyStores.BrowserLocalStorageKeyStore();
  const near = await getNear(keyStore);
  const wallet = new WalletConnection(near, 'linkdrop');

  return {
    near,
    wallet,
    keyStore,
  };
};
