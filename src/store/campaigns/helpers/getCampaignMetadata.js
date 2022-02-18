import { Account } from 'near-api-js/lib/account';
import { toCamelCase } from '../../helpers/toCamelCase';

/*
  This is a common method for all campaign types, but execution result may be different for
  different campaign types
 */

export const getCampaignMetadata = async (connection, campaignId) =>
  new Account(connection, campaignId)
    .viewFunction(campaignId, 'get_campaign_metadata')
    .then((r) => toCamelCase(r));
