import { KeyPair } from 'near-api-js';
import { parseSeedPhrase } from 'near-seed-phrase';
import { routes } from '../../../../../config/routes';
import { config } from '../../../../../near/config';

const onSuccess = async (state, actions, history, temporary) => {
  const { walletUserId, mnemonic } = temporary;
  const keyStore = state.general.entities.keyStore;
  const linkdropUserAccountId = state.general.user.accounts[walletUserId].linkdrop.accountId;
  const { secretKey, publicKey } = parseSeedPhrase(mnemonic);

  await keyStore.setKey(
    config.networkId,
    linkdropUserAccountId,
    KeyPair.fromString(secretKey),
  );

  actions.general.user.setLinkdropMnemonic({ walletUserId, mnemonic, secretKey, publicKey });
  history.replace(routes.campaigns);
};

const onError = (actions, history) => {
  actions.general.setError({
    isError: true,
    description: 'Linkdrop account was not created',
  });
  history.replace(routes.createAccount);
};

export const createAccount = async ({ state, actions, history, query }) => {
  const temporary = state.general.temporary;
  actions.general.clearTemporaryData();
  if (query.transactionHashes) await onSuccess(state, actions, history, temporary);
  if (query.errorCode) onError(actions, history);
};
