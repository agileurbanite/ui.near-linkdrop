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
import { getUserContract } from '../../../../helpers/getContracts';

export const createAccount = async (state, near, linkdrop, campaignId, deposit) => {
  try {
    const userAccount = await near.account(linkdrop.accountId);
    const wasm = await fetch('wasm/nft_campaign.wasm')
      .then((r) => r.arrayBuffer())
      .then((r) => new Uint8Array(r));

    await userAccount.signAndSendTransaction(campaignId, [
      createAccountTx(),
      transfer(deposit),
      addKey(PublicKey.from(linkdrop.publicKey), fullAccessKey()),
      deployContract(wasm),
      functionCall('new', {}, terraGas(30), 0),
    ]);

    await getUserContract(state, linkdrop.accountId).add_campaign_to_list({
      args: { campaign_id: campaignId },
    });

    await setKeyToKeyStore(near.config.keyStore, campaignId, linkdrop.secretKey);
  } catch (e) {
    /* eslint-disable no-console */
    console.log(e);
  }
};
