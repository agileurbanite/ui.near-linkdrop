import { Button } from '@material-ui/core';
import { memoryRoutes } from '../../../../../../config/routes';
import { Navigate } from '../../../../../providers/MemoryRouter';
import { Collections } from './Collections/Collections';
import { useJss } from './SelectNft.jss';

const { nft } = memoryRoutes.createCampaign;

export const SelectNft = () => {
  const jss = useJss();

  return (
    <div className={jss.container}>
      <p>Select Nft</p>
      <Collections />
      <Navigate to={nft.campaignData}>
        <Button variant="outlined" color="primary">
          Back
        </Button>
      </Navigate>
    </div>
  );
};
