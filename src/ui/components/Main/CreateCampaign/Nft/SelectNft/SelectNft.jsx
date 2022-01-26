import { Button } from '@material-ui/core';
import { memoryRoutes } from '../../../../../../config/routes';
import { Navigate } from '../../../../../providers/MemoryRouter';
import { Collections } from './Collections/Collections';
import { useJss } from './SelectNft.jss';

const { campaignData, summary } = memoryRoutes.createCampaign.nft;

export const SelectNft = () => {
  const jss = useJss();

  return (
    <div className={jss.container}>
      <p>Select Nft</p>
      <Collections />
      <div>
        <Navigate to={campaignData}>
          <Button variant="outlined" color="primary">
            Back
          </Button>
        </Navigate>
        <Navigate to={summary}>
          <Button variant="outlined" color="primary">
            Next
          </Button>
        </Navigate>
      </div>
    </div>
  );
};
