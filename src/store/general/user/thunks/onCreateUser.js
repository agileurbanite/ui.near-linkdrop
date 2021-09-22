import { thunk } from 'easy-peasy';
import BN from 'bn.js';
import { parseNearAmount } from 'near-api-js/lib/utils/format';
import { parseSeedPhrase } from 'near-seed-phrase';
import { getRoute } from '../../../../config/routes';
import { getAccountName } from '../../../helpers/getAccountName';
import { redirectActions } from '../../../../config/redirectActions';
import { getLinkdropContract } from '../../../helpers/getContracts';

export const onCreateUser = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { mnemonic } = payload;

  const state = getStoreState();
  const walletUserId = state.general.user.currentAccount;

  const actions = getStoreActions();
  const setTemporaryData = actions.general.setTemporaryData;

  const linkdrop = getLinkdropContract(state);
  const accessKey = parseSeedPhrase(mnemonic);
  const redirectAction = redirectActions.createAccount;

  setTemporaryData({ redirectAction, walletUserId, mnemonic });

  // call this func will redirect the user to the wallet
  linkdrop.create_user_account({
    args: {
      name: getAccountName(walletUserId),
      public_key: accessKey.publicKey,
    },
    amount: parseNearAmount('5'),
    gas: new BN('100000000000000'),
    callbackUrl: getRoute.callbackUrl({ redirectAction }),
  });
});
