import { thunk } from 'easy-peasy';
import { getUserContract } from '../../helpers/getContracts';
import { getCampaignMetadata } from '../helpers/getCampaignMetadata';

// TODO We can have a case with multi devices - if user will create campaign on device A
// device B won't have a key in LS and wont be able to generate keys for this campaign

export const onMountCampaigns = thunk(async (_, __, { getStoreState, getStoreActions }) => {
  const state = getStoreState();
  const connection = state.general.entities.near.connection;
  const linkdropUserId = state.general.user.linkdrop.accountId;

  const actions = getStoreActions();
  const mountCampaigns = actions.campaigns.mountCampaigns;
  const setError = actions.general.setError;

  const user = getUserContract(state, linkdropUserId);

  try {
    const campaignIds = await user.get_campaigns();
    const campaigns = await Promise.all(
      campaignIds.map((campaignId) => getCampaignMetadata(connection, campaignId)),
    );

    mountCampaigns({ campaignIds, campaigns });
  } catch (e) {
    setError({ description: e.message });
  }
});
