import { thunk } from 'easy-peasy';
import BN from 'bn.js';
import { Account } from 'near-api-js';
// import { delay } from 'ky/distribution/utils/time';
import { getCampaignContract } from '../../../near/helpers/getCampaignContract';
import { getKeysFromMnemonic } from '../helpers/getKeysFromMnemonic';
import { getPagesRange, getPagination } from '../helpers/getPagination';
import { config } from '../../../near/config';

const deleteKeys = ({ firstPage, lastPage, total, elementsPerPage, mnemonic, campaign }) => ({
  async *[Symbol.asyncIterator]() {
    for (let page = firstPage; page <= lastPage; page += 1) {
      const { range } = getPagination({ page, total, elementsPerPage });
      const keys = await getKeysFromMnemonic({ mnemonic, start: range.start, end: range.end });

      await campaign.clear_state({
        payload: { keys: keys.map(({ pk }) => pk) },
        gas: new BN('300000000000000'),
      });

      yield page;
    }
  },
});

// const testIterator = ({ firstPage, lastPage }) => ({
//   async *[Symbol.asyncIterator]() {
//     for (let page = firstPage; page <= lastPage; page += 1) {
//       await delay(500);
//       yield page;
//     }
//   },
// });

export const onDeleteCampaign = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { campaignId, onFinishDeleting, setProgress } = payload;

  const state = getStoreState();
  const near = state.general.entities.near;
  const keyStore = state.general.entities.keyStore;
  const walletUserId = state.general.user.currentAccount;
  const mnemonic = state.general.user.accounts[walletUserId].linkdrop.mnemonic;
  const total = state.campaigns.map[campaignId].keysStats.total;

  const actions = getStoreActions();
  const deleteCampaign = actions.campaigns.deleteCampaign;

  const account = new Account(near.connection, campaignId);
  const campaign = getCampaignContract(state, campaignId);

  const elementsPerPage = 30;
  const { firstPage, lastPage } = getPagesRange(total, elementsPerPage);

  const iterator = deleteKeys({
    firstPage,
    lastPage,
    total,
    elementsPerPage,
    mnemonic,
    campaign,
  });

  // const iterator = testIterator({ firstPage: 1, lastPage: 5 });

  for await (const page of iterator) {
    setProgress(Math.min((page / lastPage) * 100), 95);
  }

  await account.deleteAccount(walletUserId);
  await keyStore.removeKey(config.networkId, campaignId);
  deleteCampaign(campaignId);
  onFinishDeleting();
});
