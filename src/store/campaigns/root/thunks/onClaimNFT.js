import BN from 'bn.js';
import { thunk } from 'easy-peasy';
import { utils, keyStores } from 'near-api-js';
import { getNftCampaignContract } from '../../../helpers/getContracts';
import { getNear } from '../../../general/helpers/getNearPack';

export const addKeyToKeyStore = async (keyStore, accountId, secretKey) => {
  const keyPair = utils.KeyPair.fromString(secretKey);
  await keyStore.setKey('testnet', accountId, keyPair);
};

export const onClaimNFT = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const state = getStoreState();
  const neardropUserId = state.general.user.linkdrop.accountId;
  const actions = getStoreActions();

  const { campaignId, beneficiaryId, secretKey } = payload;

  try {
    const keyStore = new keyStores.InMemoryKeyStore();
    const near = await getNear(keyStore);
    await addKeyToKeyStore(keyStore, campaignId, secretKey);
    const nftCampaign = getNftCampaignContract({ near, campaignId });


    const res = await nftCampaign.claim({
      args: { beneficiary_id: beneficiaryId },
      gas: new BN('300000000000000'),
    });
    console.log(res);
  } catch (e) {
    actions.general.setError({ isError: true, description: e.message });
  }
});
