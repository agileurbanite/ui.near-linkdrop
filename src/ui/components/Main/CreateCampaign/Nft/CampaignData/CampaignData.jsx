import { useStoreActions } from 'easy-peasy';
import { delay } from 'ky/distribution/utils/time';
import { Button } from '@material-ui/core';
import { memoryRoutes } from '../../../../../../config/routes';
import { Navigate } from '../../../../../providers/MemoryRouter';
import { useJss } from './CampaignData.jss';

const { nft, selectType } = memoryRoutes.createCampaign;

export const CampaignData = () => {
  const onMountSelectNft = useStoreActions(
    (actions) => actions.campaigns.createCampaign.onMountSelectNft,
  );
  const jss = useJss();

  return (
    <div className={jss.container}>
      <p>NFT - GeneralData</p>
      <Navigate to={nft.selectNft} beforeHook={onMountSelectNft}>
        <Button variant="contained" color="primary">
          Select Nft
        </Button>
      </Navigate>
      <Navigate to={selectType}>
        <Button variant="outlined" color="primary">
          Back
        </Button>
      </Navigate>
    </div>
  );
};
