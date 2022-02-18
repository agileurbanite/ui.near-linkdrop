import { Button } from '@material-ui/core';
import { useStoreActions } from 'easy-peasy';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField } from '../general/TextField/TextField';
import { useJss } from './ClaimPage.jss';

const statuses = {
  init: 'init',
  success: 'success',
  error: 'error',
};

export const ClaimPage = () => {
  const [status, setStatus] = useState(statuses.init);
  const onClaimNFT = useStoreActions((a) => a.campaigns.onClaimNFT);
  const jss = useJss();
  const { handleSubmit, control } = useForm();

  const onSuccessfulClaim = () => setStatus(statuses.success);

  const onClick = handleSubmit(({ beneficiaryId }) => {
    onClaimNFT({ beneficiaryId, onSuccessfulClaim });
  });

  return (
    <div className={jss.container}>
      ClaimPage
      {status === statuses.init && (
        <>
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
        </>
      )}
      {status === statuses.success && <div>You have successfully claimed your NFT</div>}
    </div>
  );
};
