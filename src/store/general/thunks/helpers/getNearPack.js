import { connect, keyStores, WalletConnection } from 'near-api-js';
import { config } from '../../../../near/config';

const { networkId, nodeUrl, walletUrl } = config;

export const getNearPack = async () => {
  const keyStore = new keyStores.BrowserLocalStorageKeyStore();

  const near = await connect({
    networkId,
    nodeUrl,
    walletUrl,
    keyStore,
  });

  const wallet = new WalletConnection(near, 'linkdrop');

  return {
    near,
    wallet,
    keyStore,
  };
};
