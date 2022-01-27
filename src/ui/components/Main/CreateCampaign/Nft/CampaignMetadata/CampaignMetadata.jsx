import { useStoreActions, useStoreState } from 'easy-peasy';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { TextField } from '../../../../general/TextField/TextField';
import { memoryRoutes } from '../../../../../../config/routes';
import { Navigate } from '../../../../../providers/MemoryRouter';
import { useJss } from './CampaignMetadata.jss';

const { selectType } = memoryRoutes.createCampaign;

export const CampaignMetadata = () => {
  const campaignName = useStoreState((s) => s.campaigns.createCampaign.nft.campaignName);
  const linkRedirectUrl = useStoreState((s) => s.campaigns.createCampaign.nft.linkRedirectUrl);
  const loadNftCollections = useStoreActions((a) => a.campaigns.createCampaign.loadNftCollections);
  const setNftCampaignMetadata = useStoreActions(
    (a) => a.campaigns.createCampaign.setNftCampaignMetadata,
  );
  const jss = useJss();

  const { control, formState, handleSubmit } = useForm({
    defaultValues: {
      campaignName,
      linkRedirectUrl,
    },
  });

  const onSubmit = handleSubmit((values) => {
    setNftCampaignMetadata(values);
    // don't load if data is already loaded
    loadNftCollections();
  });

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
        name="linkRedirectUrl"
        variant="outlined"
        label="Redirect URL"
        error={Boolean(formState.errors?.linkRedirectUrl?.message)}
        helperText={formState.errors?.linkRedirectUrl?.message}
      />
      <div>
        <Navigate to={selectType}>
          <Button variant="outlined" color="primary">
            Back
          </Button>
        </Navigate>
        <Button variant="outlined" color="primary" onClick={onSubmit}>
          Next
        </Button>
      </div>
    </div>
  );
};
