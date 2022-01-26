import BN from 'bn.js';
import { thunk } from 'easy-peasy';
import { keyStores } from 'near-api-js';
import { getNftCampaignContract } from '../../helpers/getContracts';
import { getNear } from '../../general/helpers/getNearPack';
import { setKeyToKeyStore } from '../../helpers/setKeyToKeyStore';

export const onClaimNFT = thunk(async (_, payload, { /* getStoreState */ getStoreActions }) => {
  // const state = getStoreState();
  // const neardropUserId = state.general.user.linkdrop.accountId;
  const actions = getStoreActions();

  const { campaignId, beneficiaryId, secretKey } = payload;

  try {
    const keyStore = new keyStores.InMemoryKeyStore();
    const near = await getNear(keyStore);
    await setKeyToKeyStore(keyStore, campaignId, secretKey);
    const nftCampaign = getNftCampaignContract({ near, campaignId });

    const res = await nftCampaign.claim({
      args: { beneficiary_id: beneficiaryId },
      gas: new BN('300000000000000'),
    });
    /* eslint-disable no-console */
    console.log(res);
  } catch (e) {
    actions.general.setError({ isError: true, description: e.message });
  }
});
