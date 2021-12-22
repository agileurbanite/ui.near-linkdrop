import { Button } from '@material-ui/core';
import { useStoreActions } from 'easy-peasy';
import { memoryRoutes } from '../../../../../../config/routes';
import { Navigate } from '../../../../../providers/MemoryRouter';
import { useJss } from './Summary.jss';

const { selectNft } = memoryRoutes.createCampaign.nft;

export const Summary = () => {
  const prepareForNftCampaignCreation = useStoreActions(
    (actions) => actions.campaigns.createCampaign.prepareForNftCampaignCreation,
  );
  const createNftCampaign = useStoreActions(
    (actions) => actions.campaigns.createCampaign.createNftCampaign,
  );
  const transferNftsOwnershipToCampaign = useStoreActions(
    (actions) => actions.campaigns.createCampaign.transferNftsOwnershipToCampaign,
  );
  const jss = useJss();

  return (
    <div className={jss.container}>
      <p>Summary</p>
      <Navigate to={selectNft}>
        <Button variant="outlined" color="primary">
          Back
        </Button>
      </Navigate>
      <Button variant="outlined" color="primary" onClick={prepareForNftCampaignCreation}>
        Prepare for creation
      </Button>
      <Button variant="outlined" color="primary" onClick={createNftCampaign}>
        Create Campaign
      </Button>
      <Button variant="outlined" color="primary" onClick={transferNftsOwnershipToCampaign}>
        Transfer Nfts Ownership
      </Button>
    </div>
  );
};
