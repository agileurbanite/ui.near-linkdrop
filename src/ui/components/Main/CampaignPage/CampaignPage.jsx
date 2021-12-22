import { useStoreState } from 'easy-peasy';
import { Near } from './Near/Near';

export const CampaignPage = () => {
  const campaign = useStoreState((store) => store.campaigns.campaign);

  return campaign.type==="near"&&(
    <>
      <Near campaign={campaign}/>
    </>
  )
};
