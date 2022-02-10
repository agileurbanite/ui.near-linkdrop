import { useStoreState } from 'easy-peasy';
import { campaignTypes } from '../../../../config/campaignStatus';
import { Near } from './Near/Near';
import { Nft } from './Nft/Nft';

export const CampaignPage = () => {
  const campaign = useStoreState((store) => store.campaigns.campaign);
  return (
    <>
      {campaign.type === campaignTypes.near.type && <Near campaign={campaign} />}
      {campaign.type === campaignTypes.nft.type && <Nft campaign={campaign} />}
    </>
  );
};
