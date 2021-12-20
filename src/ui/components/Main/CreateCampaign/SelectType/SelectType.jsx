import { Button } from '@material-ui/core';
import { Step } from '../general/Step/Step';
import { Navigate } from '../../../../providers/MemoryRouter';
import { memoryRoutes } from '../../../../../config/routes';
import { useJss } from './SelectType.jss';

export const SelectType = () => {
  const jss = useJss();

  return (
    <div className={jss.container}>
      <Step step={1} />
      <p>Select Campaign Type</p>
      <Navigate to={memoryRoutes.createCampaign.near.generalData}>
        <Button variant="contained" color="primary">
          NEAR
        </Button>
      </Navigate>
      <Navigate to={memoryRoutes.createCampaign.nft.campaignData}>
        <Button variant="contained" color="secondary">
          NFT
        </Button>
      </Navigate>
    </div>
  );
};
