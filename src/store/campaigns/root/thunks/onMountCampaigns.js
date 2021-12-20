import { thunk } from 'easy-peasy';
import { getUserContract, getCampaignContract } from '../../../helpers/getContracts';
import { toCamelCase } from '../../../helpers/toCamelCase';

// TODO We can have a case with multi devices - if user will create campaign on device A
// device B won't have a key in LS and wont be able to generate keys for this campaign

export const onMountCampaigns = thunk(async (_, __, { getStoreState, getStoreActions }) => {
  const state = getStoreState();
  const linkdropUserId = state.general.user.linkdrop.accountId;

  const actions = getStoreActions();
  const mountCampaigns = actions.campaigns.mountCampaigns;
  const setError = actions.general.setError;

  const user = getUserContract(state, linkdropUserId);

  try {
    const campaignIds = await user.get_campaigns();
    const campaigns = await Promise.all(
      campaignIds.map((campaignId) =>
        getCampaignContract(state, campaignId).get_campaign_metadata(),
      ),
    );
    mountCampaigns({ campaignIds, campaigns: toCamelCase(campaigns) });
  } catch (e) {
    setError({ description: e.message });
  }
});
