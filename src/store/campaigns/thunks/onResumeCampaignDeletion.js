import BN from 'bn.js';
import { thunk } from 'easy-peasy';
import { modals } from '../../../config/modals';
import { nearConfig } from '../../../config/nearConfig';
import { getCampaignContract } from '../../helpers/getContracts';
import { getChunksRange, getChunkElementsRange } from '../helpers/getChunksRange';
import { getKeysFromMnemonic } from '../helpers/getKeysFromMnemonic';

// TODO create reusable function
const createDeleteKeysIterator = ({
  totalKeys,
  mnemonic,
  campaign,
  internalCampaignId,
  deletedDuringDeletion,
}) => ({
  async *[Symbol.asyncIterator]() {
    const elementsPerChunk = 30;
    const startElement = deletedDuringDeletion + 1;
    const totalElements = totalKeys;

    const { firstChunk, lastChunk } = getChunksRange({
      startElement,
      totalElements,
      elementsPerChunk,
    });

    for (let chunkPosition = firstChunk; chunkPosition <= lastChunk; chunkPosition += 1) {
      const { firstElement, lastElement } = getChunkElementsRange({
        startElement,
        chunkPosition,
        totalElements,
        elementsPerChunk,
      });

      const keys = await getKeysFromMnemonic({
        mnemonic,
        start: firstElement,
        end: lastElement,
        internalCampaignId,
      });

      await campaign.clear_state({
        args: { keys: keys.map(({ pk }) => pk) },
        gas: new BN('300000000000000'),
      });
      // return percentage between 0% and 99%
      yield Math.trunc(Math.min((chunkPosition / lastChunk) * 100, 99));
    }
  },
});

export const onResumeCampaignDeletion = thunk(
  async (_, payload, { getStoreState, getStoreActions }) => {
    const { campaignId, total, internalCampaignId, deletedDuringDeletion, setProgress } = payload;

    const state = getStoreState();
    const keyStore = state.general.entities.keyStore;
    const walletUserId = state.general.user.wallet.accountId;
    const mnemonic = state.general.user.linkdrop.mnemonic;

    const actions = getStoreActions();
    const deleteCampaign = actions.campaigns.deleteCampaign;
    const setError = actions.general.setError;

    const campaign = getCampaignContract(state, campaignId);

    const iterator = createDeleteKeysIterator({
      totalKeys: total,
      mnemonic,
      campaign,
      internalCampaignId,
      deletedDuringDeletion,
    });

    try {
      for await (const percentage of iterator) {
        setProgress(percentage);
      }

      await campaign.delete_campaign({
        args: { beneficiary_id: walletUserId },
        gas: new BN('50000000000000'),
      });

      await keyStore.removeKey(nearConfig.networkId, campaignId);
      deleteCampaign(campaignId);
      actions.general.hideModal(modals.resumeCampaignDeletion);
    } catch (e) {
      setError({ description: e.message });
    }
  },
);
