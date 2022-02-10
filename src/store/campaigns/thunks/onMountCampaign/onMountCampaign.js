import { thunk } from 'easy-peasy';
import { Account } from 'near-api-js/lib/account';
import { campaignTypes } from '../../../../config/campaignStatus';
import { getCampaignMetadata } from '../../helpers/getCampaignMetadata';
import { mountNearCampaign } from './mountNearCampaign';
import { mountNftCampaign } from './mountNftCampaign';

export const onMountCampaign = thunk(async (_, campaignId, { getStoreState, getStoreActions }) => {
  const state = getStoreState();
  const connection = state.general.entities.near.connection;
  const mnemonic = state.general.user.linkdrop.mnemonic;
  const actions = getStoreActions();

  const [balance, metadata] = await Promise.all([
    new Account(connection, campaignId).getAccountBalance(),
    getCampaignMetadata(connection, campaignId),
  ]);

  if (metadata.campaignType === campaignTypes.nft.type) {
    await mountNftCampaign({ connection, actions, mnemonic, campaignId, metadata, balance });
    return;
  }

  await mountNearCampaign({ state, actions, mnemonic, campaignId, metadata, balance });
});
