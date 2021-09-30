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
  const walletAccountId = state.general.user.wallet.accountId;
  const actions = getStoreActions();

  const linkdrop = getLinkdropContract(state);
  const accessKey = parseSeedPhrase(mnemonic);
  const redirectAction = redirectActions.createAccount;

  actions.general.setTemporaryData({ redirectAction, mnemonic });

  // call this func will redirect the user to the wallet
  linkdrop.create_user_account({
    args: {
      name: getAccountName(walletAccountId),
      public_key: accessKey.publicKey,
    },
    amount: parseNearAmount('5'),
    gas: new BN('100000000000000'),
    callbackUrl: getRoute.callbackUrl({ redirectAction }),
  });
});
