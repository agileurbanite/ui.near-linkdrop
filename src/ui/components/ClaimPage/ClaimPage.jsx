import { useStoreActions } from 'easy-peasy';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import { TextField } from '../general/TextField/TextField';
import { useJss } from './ClaimPage.jss';

export const ClaimPage = () => {
  const onClaimNFT = useStoreActions((a) => a.campaigns.onClaimNFT);
  const jss = useJss();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      campaignId: 'abc2.eclipseer.linkdrop.testnet',
      beneficiaryId: 'eclipseeer2.testnet',
      secretKey: 'ed25519:3V5rYNwYfYsSRzuAr8jhf64D6kRwppuy9k3m8CxXQxqNHLa2dGAe162sZNUwjXJxfkGtvf8XnG42qV5MnYrJcocW',
    },
  });


  const onClick = handleSubmit((values) => {
    onClaimNFT(values);
  });

  return (
    <div className={jss.container}>
      ClaimPage
      <TextField control={control} name="beneficiaryId" label="Beneficiary Id" variant="outlined" />
      <TextField control={control} name="campaignId" label="Campaign Id" variant="outlined" />
      <TextField control={control} name="secretKey" label="Secret Key" variant="outlined" />
      <Button variant="contained" onClick={onClick}>
        Claim NFT
      </Button>
    </div>
  );
};
