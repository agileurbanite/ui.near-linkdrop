import { thunk } from 'easy-peasy';
import { transactions, KeyPair } from 'near-api-js';
import { PublicKey } from 'near-api-js/lib/utils';
import {
  fullAccessKey,
  createAccount,
  transfer,
  addKey,
  deployContract,
  functionCall,
} from 'near-api-js/lib/transaction';

export const createNftCampaign = thunk(async (_, __, { getStoreState, getStoreActions }) => {
  const state = getStoreState();
  const near = state.general.entities.near;
  const linkdropAccountId = state.general.user.linkdrop.accountId;

  console.log('createNftCampaign');

  const user = await near.account(linkdropAccountId);

  try {
    // 'ed25519:ADUmDboo9NahFxUS7crBX3hNUrwmw4ANTgUZhU4F2nwe'
    // "ed25519:2W3McSV6SGxtiuPEGzjoXi8REqUoEJFAT65JKC9J77UzApSFQQvm9Q6ofWU1px1iVMLzQFWiE2gZ1jWc6f617guA"
    const wasm = await fetch('wasm/nft_campaign.wasm').then((res) => res.arrayBuffer());

    const res1 = await user.signAndSendTransaction(`abc2.${linkdropAccountId}`, [
      createAccount(),
      transfer('4000000000000000000000000'),
      addKey(
        PublicKey.from('ed25519:ADUmDboo9NahFxUS7crBX3hNUrwmw4ANTgUZhU4F2nwe'),
        fullAccessKey(),
      ),
      deployContract(new Uint8Array(wasm)),
      functionCall('new', Buffer.from(''), 30000000000000, 0),
    ]);

    console.log(res1);

    // Need to call only 1 time - set to LS
    const keyPair = KeyPair.fromString('ed25519:2W3McSV6SGxtiuPEGzjoXi8REqUoEJFAT65JKC9J77UzApSFQQvm9Q6ofWU1px1iVMLzQFWiE2gZ1jWc6f617guA');
    await near.config.keyStore.setKey('testnet', `abc2.${linkdropAccountId}`, keyPair);

    // const abc = await near.account(`abc2.${linkdropAccountId}`);
    // const res1 = await abc.signAndSendTransaction(`abc2.${linkdropAccountId}`, [
    //   // transactions.functionCall('new', {}, 30000000000000, 0),
    //   transactions.deployContract(new Uint8Array(wasm)),
    // ]);

  } catch (e) {
    console.log(e);
  }
});
