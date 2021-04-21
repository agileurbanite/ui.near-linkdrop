import { thunk } from 'easy-peasy';
import { KeyPairEd25519 } from 'near-api-js/lib/utils';
import { Account } from 'near-api-js';
import { Contract } from '../../../near/api/Сontract';
import { config } from '../../../near/config';

export const onCancelLink = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { secretKey, setLoading, onClose } = payload;
  const store = getStoreState();
  const accountId = store.general.user.accountId;
  const near = store.general.entities.near;
  const keyStore = store.general.entities.keyStore;
  const actions = getStoreActions();
  const deactivateLink = actions.campaigns.deactivateLink;

  setLoading(true);

  await keyStore.setKey(
    config.networkId,
    config.linkDropContractId,
    KeyPairEd25519.fromString(secretKey),
  );

  const account = new Account(near.connection, config.linkDropContractId);
  const contract = new Contract(account, config.linkDropContractId, {
    changeMethods: ['claim'],
  });

  try {
    await contract.claim({
      payload: { account_id: accountId },
    });
    deactivateLink({ secretKey });
  } catch (e) {
    console.log(e);
  }

  await keyStore.removeKey(config.networkId, config.linkDropContractId);
  onClose();
  setLoading(false);
});
