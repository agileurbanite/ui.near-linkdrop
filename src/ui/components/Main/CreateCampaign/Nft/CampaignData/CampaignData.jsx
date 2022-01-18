import { useStoreActions } from 'easy-peasy';
import { delay } from 'ky/distribution/utils/time';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { TextField } from '../../../../general/TextField/TextField';
import { memoryRoutes } from '../../../../../../config/routes';
import { Navigate } from '../../../../../providers/MemoryRouter';
import { useJss } from './CampaignData.jss';

const { nft, selectType } = memoryRoutes.createCampaign;

export const CampaignData = () => {
  const onMountSelectNft = useStoreActions(
    (actions) => actions.campaigns.createCampaign.onMountSelectNft,
  );
  const jss = useJss();
  const { control, formState } = useForm({ defaultValues: {} });

  return (
    <div className={jss.container}>
      <p>NFT - GeneralData</p>
      <TextField
        control={control}
        name="campaignName"
        variant="outlined"
        label="Campaign name*"
        error={Boolean(formState.errors?.campaignName?.message)}
        helperText={formState.errors?.campaignName?.message}
      />
      <TextField
        control={control}
        name="redirectUrl"
        variant="outlined"
        label="Redirect URL"
        error={Boolean(formState.errors?.redirectUrl?.message)}
        helperText={formState.errors?.redirectUrl?.message}
      />
      <div>
        <Navigate to={selectType}>
          <Button variant="outlined" color="primary">
            Back
          </Button>
        </Navigate>
        <Navigate to={nft.selectNft} beforeHook={onMountSelectNft}>
          <Button variant="outlined" color="primary">
            Next
          </Button>
        </Navigate>
      </div>
    </div>
  );
};
