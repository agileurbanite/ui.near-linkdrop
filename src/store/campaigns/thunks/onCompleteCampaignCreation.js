import { parseSeedPhrase } from 'near-seed-phrase';
import BN from 'bn.js';
import { KeyPair } from 'near-api-js';
import { thunk } from 'easy-peasy';
import { redirectActions } from '../../../config/redirectActions';
import { config } from '../../../near/config';
import { getUserContract, getCampaignContract } from '../../helpers/getContracts';
import { routes } from '../../../config/routes';
import { getKeysFromMnemonic } from '../helpers/getKeysFromMnemonic';
import { getPagesRange, getPagination } from '../helpers/getPagination';

const createAddKeysIterator = ({
  totalKeys,
  elementsPerPage,
  mnemonic,
  campaign,
  internalCampaignId,
}) => ({
  async *[Symbol.asyncIterator]() {
    const { firstPage, lastPage } = getPagesRange(totalKeys, elementsPerPage);

    for (let page = firstPage; page <= lastPage; page += 1) {
      const { range } = getPagination({ page, total: totalKeys, elementsPerPage });

      const keys = await getKeysFromMnemonic({
        mnemonic,
        start: range.start,
        end: range.end,
        internalCampaignId,
      });

      await campaign.add_keys({
        args: { keys: keys.map(({ pk }) => pk) },
        gas: new BN('300000000000000'),
      });

      yield page;
    }
  },
});

export const onCompleteCampaignCreation = thunk(
  async (_, payload, { getStoreState, getStoreActions }) => {
    const { history } = payload;

    const state = getStoreState();
    const keyStore = state.general.entities.keyStore;
    const temporary = state.general.temporary;
    const walletUserId = state.general.user.currentAccount;
    const linkdropUserId = state.general.user.accounts[walletUserId].linkdrop.accountId;
    const mnemonic = state.general.user.accounts[walletUserId].linkdrop.mnemonic;

    const actions = getStoreActions();
    const clearTemporaryData = actions.general.clearTemporaryData;

    // TODO temp solution until permission system will be added;
    if (temporary.redirectAction !== redirectActions.createNearCampaign) return;

    const { campaignName, totalKeys } = temporary;

    const campaignId = `${campaignName}.${linkdropUserId}`;
    const campaignAccessKey = parseSeedPhrase(mnemonic);
    const user = getUserContract(state, linkdropUserId);

    await user.create_near_campaign({
      args: {
        name: temporary.campaignName,
        public_key: campaignAccessKey.publicKey,
        total_keys: totalKeys,
        tokens_per_key: temporary.yoctoNearPerKey,
        account_creator: config.accounts.accountCreator,
      },
      amount: temporary.campaignAmount,
      gas: new BN('300000000000000'),
    });

    await keyStore.setKey(
      config.networkId,
      campaignId,
      KeyPair.fromString(campaignAccessKey.secretKey),
    );

    const campaign = getCampaignContract(state, campaignId);
    const metadata = await campaign.get_campaign_metadata();

    const iterator = createAddKeysIterator({
      totalKeys,
      elementsPerPage: 50,
      mnemonic,
      campaign,
      internalCampaignId: metadata.campaign_id,
    });

    for await (const chunk of iterator) {
      console.log('Done №', chunk);
    }

    clearTemporaryData();
    history.replace(routes.campaigns);
  },
);
