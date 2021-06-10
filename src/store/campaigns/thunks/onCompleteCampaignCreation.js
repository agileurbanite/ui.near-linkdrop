import { mnemonicToSeed } from 'bip39-light';
import bs58 from 'bs58';
import { derivePath } from 'ed25519-hd-key';
import nacl from 'tweetnacl';
import BN from 'bn.js';
import { Account } from 'near-api-js';
import { KeyPairEd25519 } from 'near-api-js/lib/utils';
import { thunk } from 'easy-peasy';
import { Contract } from '../../../near/api/Сontract';

const userAccountId = 'dev-1622447237354-43095885940055';
const mnemonic = 'leaf shop source fish rally length trial measure wise sponsor draft shadow';
const sk =
  '4rXFz4HRThnTaXGmC7NuHSKbpdMf2k4um1ZgEhGT97myX5TWaLPDkAb6QBNV2MRtPzhXeH1USWqruDugeq6W8xEz';

// const separate = (arr, size) =>
//   arr.reduce(
//     (acc, elem) => {
//       const last = acc[acc.length - 1];
//       last.length < size ? last.push(elem) : acc.push([elem]);
//       return acc;
//     },
//     [[]],
//   );

const getPath = (campaignId, keyId) => `m/${campaignId}'/${keyId}'`;

export const createGenerateKey = (seedPhrase) => {
  const seed = mnemonicToSeed(seedPhrase);
  return (campaignId, keyId) => {
    const { key } = derivePath(getPath(campaignId, keyId), seed.toString('hex'));
    const keyPair = nacl.sign.keyPair.fromSeed(key);

    return {
      pk: bs58.encode(Buffer.from(keyPair.publicKey)),
      sk: bs58.encode(Buffer.from(keyPair.secretKey)),
    };
  };
};

const generateKey = createGenerateKey(mnemonic);
// console.log(generateKey(1, 9999));
export const onCompleteCampaignCreation = thunk(async (_, __, { getStoreState }) => {
  const store = getStoreState();
  const near = store.general.entities.near;
  const keyStore = store.general.entities.keyStore;
  const pendingCampaign = store.campaigns.pendingCampaign;

  const campaignId = `${pendingCampaign.name}.${userAccountId}`;

  await keyStore.setKey('testnet', campaignId, KeyPairEd25519.fromString(sk));

  const account = new Account(near.connection, campaignId);
  const campaign = new Contract(account, campaignId, {
    changeMethods: ['add_keys'],
  });

  const allKeys = Array(pendingCampaign.totalKeys)
    .fill(0)
    .map((i, index) => generateKey(1, index).pk) // TODO start index from 1 not 0
    .reduce(
      (acc, elem) => {
        const last = acc[acc.length - 1];
        last.length < 50 ? last.push(elem) : acc.push([elem]);
        return acc;
      },
      [[]],
    );

  let i = 0;
  /* eslint-disable */
  for (const keys of allKeys) {
    await campaign.add_keys({
      payload: { keys },
      gas: new BN('300000000000000'),
    });
    i++;
    console.log('Done chunk №', i);
  }
});
