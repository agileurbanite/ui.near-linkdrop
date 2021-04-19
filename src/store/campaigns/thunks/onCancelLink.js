import { thunk } from 'easy-peasy';
import { KeyPairEd25519 } from 'near-api-js/lib/utils';
import { Account } from 'near-api-js';
import { Contract } from '../../../near/api/Сontract';
import { config } from '../../../near/config';

export const onCancelLink = thunk(async (_, secretKey, { getStoreState }) => {
  const store = getStoreState();
  const accountId = store.general.user.accountId;
  const near = store.general.entities.near;
  const keyStore = store.general.entities.keyStore;

  console.log(secretKey);
  console.log(keyStore);

  await keyStore.setKey(
    config.networkId,
    config.linkDropContractId,
    KeyPairEd25519.fromString(secretKey),
  );

  const acc = new Account(near.connection, 'testnet');
  const contract = new Contract(acc, 'testnet', {
    changeMethods: ['claim'],
  });

  try {
    const result = await contract.claim({
      payload: { account_id: accountId },
    });
    console.log(result);
  } catch (e) {
    console.log(e);
  }

  await keyStore.removeKey(config.networkId, config.linkDropContractId);
});
