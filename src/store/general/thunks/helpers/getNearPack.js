import { connect, keyStores } from 'near-api-js';
import { WalletConnection } from '../../../../near/api/WalletConnection';
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
    user: {
      isConnected: wallet.isSignedIn(),
      accountId: wallet.getAccountId(),
    },
  };
};
