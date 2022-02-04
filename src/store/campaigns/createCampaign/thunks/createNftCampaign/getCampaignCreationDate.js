import { getNftCampaignContract } from '../../../../helpers/getContracts';
import { toCamelCase } from '../../../../helpers/toCamelCase';

export const getCampaignCreationDate = async (connection, campaignId) => {
  const contract = getNftCampaignContract(connection, campaignId);
  const metadata = await contract.get_campaign_metadata();
  return toCamelCase(metadata).createdAt;
};
