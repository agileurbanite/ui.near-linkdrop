import { Button } from '@material-ui/core';
import { useStoreActions } from 'easy-peasy';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { TextField } from '../../general/TextField/TextField';
import { useStyles } from './Form.styles';

export const Form = () => {
  const onRestoreAccess = useStoreActions((actions) => actions.general.user.onRestoreAccess);
  const history = useHistory();
  const classes = useStyles();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = handleSubmit((values) => {
    onRestoreAccess({ setError, values, history });
  });

  return (
    <form onSubmit={onSubmit} className={classes.container}>
      <TextField
        control={control}
        name="mnemonic"
        variant="outlined"
        fullWidth
        label="Seed phrase"
        error={errors?.mnemonic}
        helperText={errors?.mnemonic?.message}
      />
      <Button variant="contained" color="primary" className={classes.button} type="submit">
        Restore
      </Button>
    </form>
  );
};
