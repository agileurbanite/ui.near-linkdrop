import { thunk } from 'easy-peasy';
import { parseSeedPhrase } from 'near-seed-phrase';
import { KeyPair } from 'near-api-js';
import { routes } from '../../../../ui/config/routes';
import { config } from '../../../../near/config';

export const onRestoreAccess = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { setError, history } = payload;
  const { mnemonic } = payload.values;

  const state = getStoreState();
  const near = state.general.entities.near;
  const keyStore = state.general.entities.keyStore;
  const walletUserId = state.general.user.currentAccount;
  const linkdropUserAccountId = state.general.user.accounts[walletUserId].linkdrop.accountId;

  const actions = getStoreActions();
  const setLinkdropMnemonic = actions.general.user.setLinkdropMnemonic;

  const accessKey = parseSeedPhrase(mnemonic);
  const account = await near.account(linkdropUserAccountId);
  const keys = await account.getAccessKeys();

  const isMatch = keys.some((key) => key.public_key === accessKey.publicKey);

  if (isMatch) {
    await keyStore.setKey(
      config.networkId,
      linkdropUserAccountId,
      KeyPair.fromString(accessKey.secretKey),
    );
    setLinkdropMnemonic({ walletUserId, mnemonic });
    history.replace(routes.campaigns);
  } else {
    setError('mnemonic', {
      type: 'blockchain',
      message: `Mnemonic phrase doesn't fit to your account`,
    });
  }
});
