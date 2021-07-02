import { parseSeedPhrase } from 'near-seed-phrase';
import BN from 'bn.js';
import { KeyPair } from 'near-api-js';
import { thunk } from 'easy-peasy';
import { redirectActions } from '../../../config/redirectActions';
import { Contract } from '../../../near/api/Сontract';
import { config } from '../../../near/config';
import { createGenerateKey } from '../helpers/createGenerateKey';
import { routes } from '../../../ui/config/routes';

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

    // Create campaign account
    const user = await near.account(linkdropUserId);
    const userContract = new Contract(user, linkdropUserId, {
      changeMethods: ['create_near_campaign'],
    });

    await userContract.create_near_campaign({
      payload: {
        name: temporary.campaignName,
        public_key: campaignAccessKey.publicKey,
        tokens_per_key: temporary.yoctoNearPerKey,
      },
      amount: temporary.campaignAmount,
      gas: new BN('300000000000000'),
    });

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
