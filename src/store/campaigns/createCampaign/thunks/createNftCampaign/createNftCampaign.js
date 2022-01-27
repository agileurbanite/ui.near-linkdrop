import { thunk } from 'easy-peasy';
import { routes } from '../../../../../config/routes';
import { createAccount } from './createAccount';
import { transferNfts } from './transferNfts';

// TODO handle page closing on any stage
export const createNftCampaign = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { setProgress, history } = payload;
  const state = getStoreState();
  const near = state.general.entities.near;
  const linkdrop = state.general.user.linkdrop;
  const actions = getStoreActions();

  const { campaignName, deposit, tokens, walletFullAccessKey } = state.general.temporary;
  const campaignId = `${campaignName}.${linkdrop.accountId}`;

  try {
    await createAccount(near, linkdrop, campaignId, deposit);
    await transferNfts(state, tokens, campaignId, setProgress, walletFullAccessKey);

    // TODO Delete full access key after all NFT will be transferred;
    history.replace(routes.campaigns);
  } catch (e) {
    /* eslint-disable no-console */
    console.log(e);
  } finally {
    actions.general.clearTemporaryData();
  }
});
