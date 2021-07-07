import { Account } from 'near-api-js';
import { Contract } from '../api/Сontract';

export const getCampaignContract = (state, campaignId) =>
  new Contract(new Account(state.general.entities.near.connection, campaignId), campaignId, {
    viewMethods: ['get_keys', 'get_campaign_metadata'],
  });
