import {
  addKey,
  createAccount as createAccountTx,
  deployContract,
  fullAccessKey,
  functionCall,
  transfer,
} from 'near-api-js/lib/transaction';
import { PublicKey } from 'near-api-js/lib/utils';
import { setKeyToKeyStore } from '../../../../helpers/setKeyToKeyStore';
import { terraGas } from '../../../../helpers/terraGas';

export const createAccount = async (near, linkdrop, campaignId, deposit) => {
  try {
    const user = await near.account(linkdrop.accountId);
    const wasm = await fetch('wasm/nft_campaign.wasm').then((res) => res.arrayBuffer());

    await user.signAndSendTransaction(campaignId, [
      createAccountTx(),
      transfer(deposit),
      addKey(PublicKey.from(linkdrop.publicKey), fullAccessKey()),
      deployContract(new Uint8Array(wasm)),
      functionCall('new', {}, terraGas(30), 0),
    ]);

    await setKeyToKeyStore(near.config.keyStore, campaignId, linkdrop.secretKey);
  } catch (e) {
    /* eslint-disable no-console */
    console.log(e);
  }
};
