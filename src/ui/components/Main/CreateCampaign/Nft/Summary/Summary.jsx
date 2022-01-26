import { Button } from '@material-ui/core';
import { useStoreActions } from 'easy-peasy';
import { memoryRoutes } from '../../../../../../config/routes';
import { Navigate } from '../../../../../providers/MemoryRouter';
import { useJss } from './Summary.jss';

const { selectNft } = memoryRoutes.createCampaign.nft;

export const Summary = () => {
  const prepareNftCampaignCreation = useStoreActions(
    (a) => a.campaigns.createCampaign.prepareNftCampaignCreation,
  );
  const jss = useJss();

  return (
    <div className={jss.container}>
      <p>Summary</p>
      <Button variant="outlined" color="primary" onClick={prepareNftCampaignCreation}>
        Create NFT Campaign
      </Button>
      <Navigate to={selectNft}>
        <Button variant="outlined" color="primary">
          Back
        </Button>
      </Navigate>
    </div>
  );
};
