import BN from 'bn.js';
import { thunk } from 'easy-peasy';
import { parseNearAmount } from 'near-api-js/lib/utils/format';
import { parseSeedPhrase } from 'near-seed-phrase';
import { redirectActions } from '../../../config/redirectActions';
import { Contract } from '../../../near/api/Сontract';
import { getRoute } from '../../../ui/config/routes';

// const mnemonic = 'leaf shop source fish rally length trial measure wise sponsor draft shadow';
// const { publicKey: pk, secretKey: sk } = parseSeedPhrase(mnemonic);
// console.log(pk, sk);

const getCampaignAmount = (totalKeys, amountPerLink) => {
  // contract storage
  // key storage
  // tokens in key
  // gas fee for calling claim or create account
  const res = 2.5 + (totalKeys * (Number(amountPerLink) + 0.1));
  console.log(res);
  return parseNearAmount(res.toString());
};


export const onCreateCampaign = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { name: campaignName, icon, totalLinks, amountPerLink } = payload;

  const state = getStoreState();
  const wallet = state.general.entities.wallet;
  const walletUserId = state.general.user.currentAccount;
  const linkdropUserId = state.general.user.accounts[walletUserId].linkdrop.accountId;
  const mnemonic = state.general.user.accounts[walletUserId].linkdrop.mnemonic;

  const actions = getStoreActions();
  const setTemporaryData = actions.general.setTemporaryData;

  // TODO Rename form fields totalLinks -> totalKeys
  const totalKeys = Number(totalLinks);
  const yoctoNearPerKey = parseNearAmount(amountPerLink);

  const userContract = new Contract(wallet.account(), linkdropUserId, {
    changeMethods: ['create_near_campaign'],
  });

  const redirectAction = redirectActions.createNearCampaign;
  const { publicKey } = parseSeedPhrase(mnemonic);

  setTemporaryData({
    redirectAction,
    campaignName,
    icon,
    yoctoNearPerKey,
    totalKeys,
  });

  console.log(getCampaignAmount(totalKeys, amountPerLink));
  console.log(campaignName);
  console.log(yoctoNearPerKey);

  userContract.create_near_campaign({
    payload: {
      name: campaignName,
      public_key: publicKey,
      tokens_per_key: yoctoNearPerKey,
    },
    amount: getCampaignAmount(totalKeys, amountPerLink),
    gas: new BN('300000000000000'),
    callbackUrl: getRoute.callbackUrl({ redirectAction }),
  });
});
