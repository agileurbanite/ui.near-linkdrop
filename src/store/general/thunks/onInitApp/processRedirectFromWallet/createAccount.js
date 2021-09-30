import { KeyPair } from 'near-api-js';
import { parseSeedPhrase } from 'near-seed-phrase';
import { routes } from '../../../../../config/routes';
import { nearConfig } from '../../../../../config/nearConfig';

const onSuccess = async (state, actions, history, temporary) => {
  const { mnemonic } = temporary;
  const keyStore = state.general.entities.keyStore;
  const linkdropAccountId = state.general.user.linkdrop.accountId;
  const { secretKey, publicKey } = parseSeedPhrase(mnemonic);

  await keyStore.setKey(nearConfig.networkId, linkdropAccountId, KeyPair.fromString(secretKey));

  actions.general.user.setUserData({
    linkdrop: {
      isExist: true,
      isConnected: true,
      mnemonic,
      secretKey,
      publicKey,
    },
  });
  history.replace(routes.campaigns);
};

const onError = (actions, history) => {
  actions.general.setError({
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
