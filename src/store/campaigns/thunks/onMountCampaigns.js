import { thunk } from 'easy-peasy';
import { Account } from 'near-api-js/lib/account';
import { getAccountIdsByPublicKey } from '../../../near/helpers/getAccountIdsByPublicKey';
import { getCampaignsIds } from '../../helpers/getCampaignsIds';

export const onMountCampaigns = thunk(async (_, __, { getStoreState, getStoreActions }) => {
  const state = getStoreState();
  const near = state.general.entities.near;
  const walletUserId = state.general.user.currentAccount;
  const linkdropUserId = state.general.user.accounts[walletUserId].linkdrop.accountId;
  const publicKey = state.general.user.accounts[walletUserId].linkdrop.publicKey;

  const actions = getStoreActions();
  const mountCampaigns = actions.campaigns.mountCampaigns;
  const setError = actions.general.setError;

  try {
    const accountIds = await getAccountIdsByPublicKey(publicKey);
    const campaignIds = getCampaignsIds(accountIds, linkdropUserId);

    // const campaignIds = [
    //   '1000-links.eclipseer.linkdrop.testnet',
    //   'campaign1.eclipseer.linkdrop.testnet',
    // ];

    const campaigns = await Promise.all(
      campaignIds.map((campaignId) =>
        new Account(near.connection, campaignId).viewFunction(
          campaignId,
          'get_campaign_metadata',
          {},
        ),
      ),
    );

    mountCampaigns({ campaignIds, campaigns });
  } catch (e) {
    setError({
      isError: true,
      description: e,
    });
  }
});
