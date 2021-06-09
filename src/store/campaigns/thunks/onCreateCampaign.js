import BN from 'bn.js';
import { thunk } from 'easy-peasy';
import { parseNearAmount } from 'near-api-js/lib/utils/format';
import { parseSeedPhrase } from 'near-seed-phrase';
import qs from 'query-string';
import { Contract } from '../../../near/api/Сontract';
import { routes } from '../../../ui/config/routes';

const userAccountId = 'dev-1622447237354-43095885940055';
const mnemonic = 'leaf shop source fish rally length trial measure wise sponsor draft shadow';
const { publicKey: pk } = parseSeedPhrase(mnemonic);
// console.log(pk, sk);

// TODO Rename to onStartCampaignCreation
export const onCreateCampaign = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { name, icon, totalLinks, amountPerLink } = payload;
  const store = getStoreState();
  const wallet = store.general.entities.wallet;
  const actions = getStoreActions();
  const addPendingCampaign = actions.campaigns.addPendingCampaign;

  // TODO Rename form fields totalLinks -> totalKeys
  const totalKeys = Number(totalLinks);
  const tokensPerKey = parseNearAmount(amountPerLink);

  const userContract = new Contract(wallet.account(), userAccountId, {
    changeMethods: ['create_near_campaign'],
  });

  addPendingCampaign({
    name,
    icon,
    tokensPerKey,
    totalKeys,
  });

  await userContract.create_near_campaign({
    payload: {
      name,
      public_key: pk,
      tokens_per_key: tokensPerKey,
    },
    amount: parseNearAmount('100'), // TODO Calculate real amount for campaign
    gas: new BN('300000000000000'),
    callbackUrl: `${window.location.origin}${routes.createCampaign}?${qs.stringify({
      name,
    })}`,
  });
});
