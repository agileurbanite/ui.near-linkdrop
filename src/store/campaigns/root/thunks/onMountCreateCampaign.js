import { thunk } from 'easy-peasy';
import { getUserContract } from '../../../helpers/getContracts';

export const onMountCreateCampaign = thunk(async (_, __, { getStoreState, getStoreActions }) => {
  const state = getStoreState();
  const wallet = state.general.entities.wallet;
  const linkdropUserId = state.general.user.linkdrop.accountId;

  const actions = getStoreActions();
  const mountCreateCampaign = actions.campaigns.mountCreateCampaign;
  const setError = actions.general.setError;

  const user = getUserContract(state, linkdropUserId);

  try {
    // const [balance, campaignIds] = await Promise.all([
    //   wallet.account().getAccountBalance(),
    //   user.get_campaigns(),
    // ]);
    //
    // mountCreateCampaign({ balance, campaignIds });
  } catch (e) {
    setError({ isError: true, description: e });
  }
});
