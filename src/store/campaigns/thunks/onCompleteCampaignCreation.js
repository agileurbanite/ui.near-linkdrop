import { mnemonicToSeed } from 'bip39-light';
import bs58 from 'bs58';
import { derivePath } from 'ed25519-hd-key';
import { parseSeedPhrase } from 'near-seed-phrase';
import nacl from 'tweetnacl';
import BN from 'bn.js';
import { KeyPair } from 'near-api-js';
import { thunk } from 'easy-peasy';
import { redirectActions } from '../../../config/redirectActions';
import { Contract } from '../../../near/api/Сontract';
import { config } from '../../../near/config';
import { routes } from '../../../ui/config/routes';

// const userAccountId = 'dev-1622447237354-43095885940055';
// const mnemonic = 'leaf shop source fish rally length trial measure wise sponsor draft shadow';
// const sk =
//   '4rXFz4HRThnTaXGmC7NuHSKbpdMf2k4um1ZgEhGT97myX5TWaLPDkAb6QBNV2MRtPzhXeH1USWqruDugeq6W8xEz';

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

export const onCompleteCampaignCreation = thunk(
  async (_, payload, { getStoreState, getStoreActions }) => {
    const { history } = payload;

    const state = getStoreState();
    const near = state.general.entities.near;
    const keyStore = state.general.entities.keyStore;
    const temporary = state.general.temporary;
    const walletUserId = state.general.user.currentAccount;
    const linkdropUserId = state.general.user.accounts[walletUserId].linkdrop.accountId;
    const mnemonic = state.general.user.accounts[walletUserId].linkdrop.mnemonic;

    const actions = getStoreActions();
    const clearTemporaryData = actions.general.clearTemporaryData;

    // TODO temp solution until permission system will be added;
    if (temporary.redirectAction !== redirectActions.createNearCampaign) return;

    const campaignId = `${temporary.campaignName}.${linkdropUserId}`;
    const campaignAccessKey = parseSeedPhrase(mnemonic);

    await keyStore.setKey(
      config.networkId,
      campaignId,
      KeyPair.fromString(campaignAccessKey.secretKey),
    );

    const account = await near.account(campaignId);
    const campaign = new Contract(account, campaignId, {
      changeMethods: ['add_keys'],
    });

    const generateKey = createGenerateKey(mnemonic);

    const allKeys = Array(temporary.totalKeys)
      .fill(0)
      .map((i, index) => generateKey(1, index + 1).pk) // TODO use campaignId instead of 1
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

    clearTemporaryData();
    history.replace(routes.campaigns);
  },
);
