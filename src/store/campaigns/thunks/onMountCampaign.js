/* eslint-disable */
import { thunk } from 'easy-peasy';
import { Contract } from '../../../near/api/Сontract';
import { createGenerateKey } from '../helpers/createGenerateKey';
import { config } from '../../../near/config';

export const onMountCampaign = thunk(async (_, campaignId, { getStoreState, getStoreActions }) => {
  const state = getStoreState();
  const wallet = state.general.entities.wallet;
  const walletUserId = state.general.user.currentAccount;
  const mnemonic = state.general.user.accounts[walletUserId].linkdrop.mnemonic;

  const actions = getStoreActions();
  const mountCampaign = actions.campaigns.mountCampaign;

  const campaign = new Contract(wallet.account(), campaignId, {
    viewMethods: ['get_campaign_metadata', 'get_keys'],
  });

  const metadata = await campaign.get_campaign_metadata();
  console.log(metadata);

  const generateKey = createGenerateKey(mnemonic);
  const allKeys = Array(metadata.keys_stats.total)
    .fill(0)
    .map((i, index) => {
      const { pk, sk } = generateKey(1, index + 1);
      return pk;
      // return config.getCreateAccountAndClaimLink(sk, campaignId);
    });


  const k = await campaign.get_keys({ keys: allKeys });
  console.log(k);

  // console.log(allKeys);
  // mountCampaign({ campaignId, metadata });
});
