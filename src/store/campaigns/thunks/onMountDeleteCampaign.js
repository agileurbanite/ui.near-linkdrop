import { thunk } from 'easy-peasy';
import { Account } from 'near-api-js';

export const onMountDeleteCampaign = thunk(
  async (_, payload, { getStoreState, getStoreActions }) => {
    const { campaignId, setOpen } = payload;

    const state = getStoreState();
    const near = state.general.entities.near;

    const actions = getStoreActions();
    const enableLoading = actions.general.enableLoading;
    const disableLoading = actions.general.disableLoading;
    const showModal = actions.general.showModal

    enableLoading();
    setOpen(false);

    const account = new Account(near.connection, campaignId);
    const balance = await account.getAccountBalance();

    disableLoading();
    showModal({ name: 'deleteCampaign', params: { campaignId, balance } });
  },
);
