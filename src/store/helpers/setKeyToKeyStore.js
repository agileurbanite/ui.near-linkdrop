import { utils } from 'near-api-js';
import { nearConfig } from '../../config/nearConfig';

export const setKeyToKeyStore = async (keyStore, accountId, secretKey) => {
  const keyPair = utils.KeyPair.fromString(secretKey);
  await keyStore.setKey(nearConfig.networkId, accountId, keyPair);
};
