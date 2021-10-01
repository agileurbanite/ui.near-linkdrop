import { thunk } from 'easy-peasy';
import { getUserContract } from '../../helpers/getContracts';

export const onMountSettings = thunk(async (_, __, { getStoreState, getStoreActions }) => {
  const state = getStoreState();
  const linkdropUserId = state.general.user.linkdrop.accountId;
  const actions = getStoreActions();
  const user = getUserContract(state, linkdropUserId);

  try {
    const campaignIds = await user.get_campaigns();
    actions.settings.setHasCampaigns(campaignIds);
  } catch (e) {
    actions.general.setError({ description: e.message });
  }
});
