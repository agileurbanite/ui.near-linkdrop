import { thunk } from 'easy-peasy';
import { routes } from '../../../../../config/routes';
import { getCampaignMetadata } from '../../../helpers/getCampaignMetadata';
import { createAccount } from './createAccount';
import { deleteWalletFullAccessKey } from './deleteWalletFullAccessKey';
import { transferNfts } from './transferNfts';

// TODO handle page closing on any stage
export const createNftCampaign = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { setProgress, history } = payload;
  const state = getStoreState();
  const near = state.general.entities.near;
  const linkdrop = state.general.user.linkdrop;
  const walletAccountId = state.general.user.wallet.accountId;
  const mnemonic = state.general.user.linkdrop.mnemonic;
  const actions = getStoreActions();

  const { campaignName, deposit, tokens, linkRedirectUrl, walletFullAccessKey } =
    state.general.temporary;
  const campaignId = `${campaignName}.${linkdrop.accountId}`;

  try {
    await createAccount(state, near, linkdrop, campaignId, deposit, linkRedirectUrl, tokens);
    const { createdAt } = await getCampaignMetadata(near.connection, campaignId);

    await transferNfts(
      tokens,
      campaignId,
      createdAt,
      setProgress,
      walletAccountId,
      walletFullAccessKey,
      mnemonic,
    );

    await deleteWalletFullAccessKey(walletAccountId, walletFullAccessKey);
    history.replace(routes.campaigns);
  } catch (e) {
    /* eslint-disable no-console */
    console.log(e);
  } finally {
    actions.general.clearTemporaryData();
  }
});
