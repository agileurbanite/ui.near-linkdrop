import { thunk } from 'easy-peasy';
import { parseSeedPhrase } from 'near-seed-phrase';
import { Account, KeyPair } from 'near-api-js';
import { routes } from '../../../../ui/config/routes';
import { config } from '../../../../near/config';

export const onRestoreAccess = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { setError, history } = payload;
  const { mnemonic } = payload.values;

  const store = getStoreState();
  const near = store.general.entities.near;
  const keyStore = store.general.entities.keyStore;
  const currentAccount = store.general.user.currentAccount;
  const linkdropUserAccountId = store.general.user.accounts[currentAccount].linkdrop.accountId;

  const actions = getStoreActions();
  const setLinkdropMnemonic = actions.general.user.setLinkdropMnemonic;

  const accessKey = parseSeedPhrase(mnemonic);
  const keys = await new Account(near.connection, linkdropUserAccountId).getAccessKeys();
  const isMatch = keys.some((key) => key.public_key === accessKey.publicKey);

  if (isMatch) {
    await keyStore.setKey(
      config.networkId,
      linkdropUserAccountId,
      KeyPair.fromString(accessKey.secretKey),
    );
    setLinkdropMnemonic(mnemonic);
    history.replace(routes.campaigns);
  } else {
    setError('mnemonic', {
      type: 'blockchain',
      message: `Mnemonic phrase doesn't fit to your account`,
    });
  }
});
