import { useStoreState } from 'easy-peasy';
import { Near } from './Near/Near';
import { Nft } from './Nft/Nft';
import { campaignTypes } from '../../../../config/campaignStatus';

export const CampaignPage = () => {
  const campaign = useStoreState((store) => store.campaigns.campaign);

  return campaign.type === campaignTypes.near ? (
    <Near campaign={campaign} type={campaignTypes.near} />
  ) : (
    <Nft campaign={campaign} type={campaignTypes.nft} />
  );
};
