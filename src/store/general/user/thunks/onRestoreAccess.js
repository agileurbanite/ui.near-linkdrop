import { thunk } from 'easy-peasy';
import { parseSeedPhrase } from 'near-seed-phrase';
import { KeyPair } from 'near-api-js';
import { getUserContract } from '../../../helpers/getContracts';
import { routes } from '../../../../config/routes';
import { nearConfig } from '../../../../config/nearConfig';

export const onRestoreAccess = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { setError, history } = payload;
  const { mnemonic } = payload.values;

  const state = getStoreState();
  const near = state.general.entities.near;
  const keyStore = state.general.entities.keyStore;
  const linkdropUserAccountId = state.general.user.linkdrop.accountId;

  const actions = getStoreActions();

  const { publicKey, secretKey } = parseSeedPhrase(mnemonic);
  const account = await near.account(linkdropUserAccountId);
  const keys = await account.getAccessKeys();

  const isMatch = keys.some((key) => key.public_key === publicKey);

  if (isMatch) {
    const user = getUserContract(state, linkdropUserAccountId);

    const keyPair = KeyPair.fromString(secretKey);
    await keyStore.setKey(nearConfig.networkId, linkdropUserAccountId, keyPair);

    const campaignsIds = await user.get_campaigns();
    await Promise.all(
      campaignsIds.map((campaignAccountId) =>
        keyStore.setKey(nearConfig.networkId, campaignAccountId, keyPair),
      ),
    );

    actions.general.user.setUserData({
      linkdrop: {
        isConnected: true,
        mnemonic,
        secretKey,
        publicKey,
      },
    });

    history.replace(routes.campaigns);
  } else {
    setError('mnemonic', {
      type: 'blockchain',
      message: `Mnemonic phrase doesn't fit to your account`,
    });
  }
});
