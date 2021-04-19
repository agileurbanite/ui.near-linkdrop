/* eslint-disable */
import BN from 'bn.js';
import { thunk } from 'easy-peasy';
import { parseNearAmount } from 'near-api-js/lib/utils/format';
import { KeyPairEd25519 } from 'near-api-js/lib/utils';
import { v4 as uuid } from 'uuid';
import qs from 'query-string';

const getCallbackUrl = (queryParams) => `${window.location.href}?${qs.stringify(queryParams)}`;

const getKeyPair = () => {
  const keyPair = KeyPairEd25519.fromRandom();
  return {
    publicKey: keyPair.publicKey.toString().replace('ed25519:', ''),
    secretKey: keyPair.secretKey,
  };
};

export const onCreateCampaign = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const store = getStoreState();
  const wallet = store.general.entities.wallet;
  const actions = getStoreActions();
  const addPendingCampaign = actions.campaigns.addPendingCampaign;

  console.log(payload);
  const campaignId = uuid();
  const totalLinks = Number(payload.totalLinks);
  const amountPerLink = parseNearAmount(payload.amountPerLink);

  const keys = new Array(totalLinks).fill(0).map(() => getKeyPair());

  console.log(keys);

  addPendingCampaign({
    campaignId,
    name: payload.name,
    icon: payload.icon,
    amountPerLink,
    totalLinks,
    keys,
  });
  // 1500000000000000
  // 300000000000000
  const txActions = keys.map(({ publicKey }) => ({
    methodName: 'send',
    args: { public_key: publicKey },
    gas: new BN('6000000000000'),
    // gas: new BN('300000000000000'),
      // 300000000000000
      // 6000000000000
    deposit: amountPerLink,
  }));

  await wallet.account().multiFunctionCall('testnet', txActions, getCallbackUrl({ campaignId }));
});
// 297.74151
// 299.74151
