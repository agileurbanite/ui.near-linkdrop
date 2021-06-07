import { thunk } from 'easy-peasy';
import BN from 'bn.js';
import { parseNearAmount } from 'near-api-js/lib/utils/format';
import { parseSeedPhrase } from 'near-seed-phrase';
import { Contract } from '../../../near/api/Сontract';
import { getRoute } from '../../../ui/config/routes';
import { getAccountName } from '../../utils/getAccountName';
import { config } from '../../../near/config';

export const onCreateAccount = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { mnemonicPhrase } = payload;

  const state = getStoreState();
  const wallet = state.general.entities.wallet;
  const accountId = state.general.user.accountId;

  const actions = getStoreActions();
  const setTemporaryData = actions.general.setTemporaryData;

  const linkdrop = new Contract(wallet.account(), config.accounts.linkdrop, {
    changeMethods: ['create_user_account'],
  });

  const name = getAccountName(accountId);
  const accessKey = parseSeedPhrase(mnemonicPhrase);

  setTemporaryData({
    createAccount: {
      name,
      mnemonicPhrase,
    },
  });


  await linkdrop.create_user_account({
    payload: {
      name,
      public_key: accessKey.publicKey,
    },
    amount: parseNearAmount('5'),
    gas: new BN('100000000000000'),
    callbackUrl: getRoute.callbackUrl({ redirectAfter: 'createAccount', name }),
  });
});
