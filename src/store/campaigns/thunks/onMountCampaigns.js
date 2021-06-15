import { thunk } from 'easy-peasy';
import { Contract } from '../../../near/api/Сontract';

export const onMountCampaigns = thunk(async (_, __, { getStoreState, getStoreActions }) => {
  const state = getStoreState();
  const wallet = state.general.entities.wallet;
  const walletUserId = state.general.user.currentAccount;
  const linkdropUserId = state.general.user.accounts[walletUserId].linkdrop.accountId;

  const actions = getStoreActions();
  const mountCampaigns = actions.campaigns.mountCampaigns;

  const userContract = new Contract(wallet.account(), linkdropUserId, {
    viewMethods: ['get_campaigns'],
  });

  const campaignsIds = await userContract.get_campaigns();

  const campaigns = await Promise.all(
    campaignsIds.map((campaignId) => {
      const contract = new Contract(wallet.account(), campaignId, {
        viewMethods: ['get_campaign_metadata'],
      });
      return contract.get_campaign_metadata();
    }),
  );

  mountCampaigns({ campaignsIds, campaigns });
});
