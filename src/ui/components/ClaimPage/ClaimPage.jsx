import { Button } from '@material-ui/core';
import { useStoreActions } from 'easy-peasy';
import { useForm } from 'react-hook-form';
import { TextField } from '../general/TextField/TextField';
import { useJss } from './ClaimPage.jss';

export const ClaimPage = () => {
  const onClaimNFT = useStoreActions((a) => a.campaigns.onClaimNFT);
  const jss = useJss();
  const { handleSubmit, control } = useForm();

  const onClick = handleSubmit((values) => {
    onClaimNFT(values);
  });

  return (
    <div className={jss.container}>
      ClaimPage
      <TextField
        control={control}
        name="beneficiaryId"
        label="Beneficiary Id"
        variant="outlined"
        className={jss.input}
      />
      <Button variant="contained" onClick={onClick}>
        Claim NFT
      </Button>
    </div>
  );
};
