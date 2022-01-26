/* eslint-disable */
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
  const temporary = state.general.temporary;
  const actions = getStoreActions();

  console.log('createNftCampaign', state.general.temporary);

  try {
    const campaignId = `${temporary.campaignName}.${linkdrop.accountId}`;
    const tokens = [
      // ['dev-1636123728779-29153762080548', '5'],
      // ['dev-1636123728779-29153762080548', '6'],
    ];

    await createAccount(near, linkdrop, campaignId, temporary.deposit);
    await transferNfts(state, tokens, campaignId, setProgress, temporary.fullAccessKey);
    // TODO Delete full access key after all NFT will be transferred;

    history.replace(routes.campaigns);
  } catch (e) {
    console.log(e);
  } finally {
    actions.general.clearTemporaryData();
  }
});
