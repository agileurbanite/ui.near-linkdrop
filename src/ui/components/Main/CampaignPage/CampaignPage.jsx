import { useStoreState } from 'easy-peasy';
import { Near } from './Near/Near';
import { Nft } from './Nft/Nft';
import { types } from '../../../../config/campaignStatus';

export const CampaignPage = () => {
  const campaign = useStoreState((store) => store.campaigns.campaign);

  return campaign.type === types.near ? (
    <Near campaign={campaign} type={types.near} />
  ) : (
    <Nft campaign={campaign} type={types.nft} />
  );
};
