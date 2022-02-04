import { Account, Contract } from 'near-api-js';
import { nearConfig } from '../../config/nearConfig';

export const getLinkdropContract = (state) =>
  new Contract(state.general.entities.wallet.account(), nearConfig.accounts.linkdrop, {
    viewMethods: [],
    changeMethods: ['create_user_account'],
  });

// User Contract V2.0.0
export const getUserContract = (state, userId) =>
  new Contract(new Account(state.general.entities.near.connection, userId), userId, {
    viewMethods: ['get_campaigns', 'get_user_metadata'],
    changeMethods: ['add_campaign_to_list', 'remove_campaign_from_list'],
  });

export const getCampaignContract = (state, campaignId) =>
  new Contract(new Account(state.general.entities.near.connection, campaignId), campaignId, {
    viewMethods: ['get_keys', 'get_campaign_metadata'],
    changeMethods: ['add_keys', 'refund_keys', 'clear_state', 'delete_campaign'],
  });

export const getNftCampaignContract = (connection, signerId, campaignId = signerId) =>
  new Contract(new Account(connection, signerId), campaignId, {
    viewMethods: ['get_drops', 'get_campaign_metadata'],
    changeMethods: ['claim'],
  });

export const getNftCollectionContract = (connection, signerId, collectionId) =>
  new Contract(new Account(connection, signerId), collectionId, {
    viewMethods: ['nft_metadata', 'nft_tokens_for_owner'],
    changeMethods: ['nft_transfer_call'],
  });
