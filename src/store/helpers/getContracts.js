import { Account, Contract } from 'near-api-js';
import { nearConfig } from '../../config/nearConfig';

export const getLinkdropContract = (state) =>
  new Contract(state.general.entities.wallet.account(), nearConfig.accounts.linkdrop, {
    viewMethods: [],
    changeMethods: ['create_user_account'],
  });

export const getUserContract = (state, userId) =>
  new Contract(new Account(state.general.entities.near.connection, userId), userId, {
    viewMethods: ['get_campaigns', 'get_user_metadata'],
    changeMethods: ['create_near_campaign'],
  });

export const getCampaignContract = (state, campaignId) =>
  new Contract(new Account(state.general.entities.near.connection, campaignId), campaignId, {
    viewMethods: ['get_keys', 'get_campaign_metadata'],
    changeMethods: ['add_keys', 'refund_keys', 'clear_state', 'delete_campaign'],
  });

export const getNftCampaignContract = ({ state, near, campaignId }) => {
  const connection = near ? near.connection : state.general.entities.near.connection;
  return new Contract(new Account(connection, campaignId), campaignId, {
    viewMethods: ['get_drops'],
    changeMethods: ['claim'],
  });
};

export const getNftCollectionContract = (state, nftCollectionId) =>
  new Contract(
    new Account(state.general.entities.near.connection, state.general.user.linkdrop.accountId),
    nftCollectionId,
    {
      viewMethods: ['nft_metadata', 'nft_tokens_for_owner'],
      changeMethods: [],
    },
  );
