import BN from 'bn.js';
import { thunk } from 'easy-peasy';
import { modals } from '../../../config/modals';
import { getRoute } from '../../../config/routes';
import { getCampaignContract } from '../../helpers/getContracts';
import { getChunkElementsRange, getChunksRange } from '../helpers/getChunksRange';
import { getKeysFromMnemonic } from '../helpers/keys/getKeysFromMnemonic';

const createAddKeysIterator = ({
  totalKeys,
  mnemonic,
  campaign,
  internalCampaignId,
  addedDuringCreation,
}) => ({
  async *[Symbol.asyncIterator]() {
    const elementsPerChunk = 50;
    const startElement = addedDuringCreation + 1;
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

      await campaign.add_keys({
        args: { keys: keys.map(({ pk }) => pk) },
        gas: new BN('300000000000000'),
      });
      // return percentage between 0% and 99%
      yield Math.trunc(Math.min((chunkPosition / lastChunk) * 100, 99));
    }
  },
});

export const onResumeCampaignCreation = thunk(
  async (_, payload, { getStoreState, getStoreActions }) => {
    const { history, campaignId, total, internalCampaignId, addedDuringCreation, setProgress } =
      payload;

    const state = getStoreState();
    const mnemonic = state.general.user.linkdrop.mnemonic;
    const actions = getStoreActions();

    const campaign = getCampaignContract(state, campaignId);

    const iterator = createAddKeysIterator({
      totalKeys: total,
      mnemonic,
      campaign,
      internalCampaignId,
      addedDuringCreation,
    });

    for await (const percentage of iterator) {
      setProgress(percentage);
    }

    actions.general.hideModal(modals.resumeCampaignCreation);
    history.replace(getRoute.campaign(campaignId));
  },
);
