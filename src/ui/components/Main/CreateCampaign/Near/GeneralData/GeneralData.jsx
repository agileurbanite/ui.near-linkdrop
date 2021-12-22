import { Button } from '@material-ui/core';
import { memoryRoutes } from '../../../../../../config/routes';
import { Navigate } from '../../../../../providers/MemoryRouter';
import { useJss } from './GeneralData.jss';

export const GeneralData = () => {
  const jss = useJss();
  return (
    <div className={jss.container}>
      <p>Near - GeneralData</p>
      <Navigate to={memoryRoutes.createCampaign.selectType}>
        <Button variant="outlined" color="primary">
          Back
        </Button>
      </Navigate>
    </div>
  );
};
