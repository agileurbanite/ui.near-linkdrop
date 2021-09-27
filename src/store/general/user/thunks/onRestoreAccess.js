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
  const walletUserId = state.general.user.currentAccount;
  const linkdropUserAccountId = state.general.user.accounts[walletUserId].linkdrop.accountId;

  const actions = getStoreActions();
  const setLinkdropMnemonic = actions.general.user.setLinkdropMnemonic;

  const { publicKey, secretKey } = parseSeedPhrase(mnemonic);
  const account = await near.account(linkdropUserAccountId);
  const keys = await account.getAccessKeys();

  const isMatch = keys.some((key) => key.public_key === publicKey);

  if (isMatch) {
    const user = getUserContract(state, linkdropUserAccountId);
    const keyPair = KeyPair.fromString(secretKey);

    const campaignsIds = await user.get_campaigns();

    await keyStore.setKey(nearConfig.networkId, linkdropUserAccountId, keyPair);
    await Promise.all(
      campaignsIds.map((campaignAccountId) =>
        keyStore.setKey(nearConfig.networkId, campaignAccountId, keyPair),
      ),
    );

    setLinkdropMnemonic({ walletUserId, mnemonic, publicKey, secretKey });
    history.replace(routes.campaigns);
  } else {
    setError('mnemonic', {
      type: 'blockchain',
      message: `Mnemonic phrase doesn't fit to your account`,
    });
  }
});
