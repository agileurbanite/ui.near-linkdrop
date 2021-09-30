import { parseSeedPhrase } from 'near-seed-phrase';
import BN from 'bn.js';
import { KeyPair } from 'near-api-js';
import { thunk } from 'easy-peasy';
import { modals } from '../../../config/modals';
import { nearConfig } from '../../../config/nearConfig';
import { getUserContract, getCampaignContract } from '../../helpers/getContracts';
import { getRoute } from '../../../config/routes';
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
      // return percentage between 0% and 99%
      yield Math.trunc(Math.min((page / lastPage) * 100, 99));
    }
  },
});

export const onFinishCampaignCreation = thunk(
  async (_, payload, { getStoreState, getStoreActions }) => {
    const { history, data, setProgress } = payload;

    const state = getStoreState();
    const keyStore = state.general.entities.keyStore;
    const linkdropUserId = state.general.user.linkdrop.accountId;
    const mnemonic = state.general.user.linkdrop.mnemonic;

    const actions = getStoreActions();
    const hideModal = actions.general.hideModal;

    const { campaignId, campaignName, totalKeys, yoctoNearPerKey, campaignAmount } = data;
    const campaignAccessKey = parseSeedPhrase(mnemonic);
    const user = getUserContract(state, linkdropUserId);

    await user.create_near_campaign({
      args: {
        name: campaignName,
        public_key: campaignAccessKey.publicKey,
        total_keys: totalKeys,
        tokens_per_key: yoctoNearPerKey,
        account_creator: nearConfig.accounts.accountCreator,
      },
      amount: campaignAmount,
      gas: new BN('300000000000000'),
    });

    await keyStore.setKey(
      nearConfig.networkId,
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

    for await (const percentage of iterator) {
      setProgress(percentage);
    }

    hideModal(modals.createCampaign);
    history.replace(getRoute.campaign(campaignId));
  },
);
