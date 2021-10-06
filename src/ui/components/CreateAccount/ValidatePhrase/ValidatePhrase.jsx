import { useStoreActions } from 'easy-peasy';
import { useForm } from 'react-hook-form';
import { Button, Typography } from '@material-ui/core';
import { TextField } from '../../general/TextField/TextField';
import { validations } from './validations';
import { useStyles } from './ValidatePhrase.styles';

export const ValidatePhrase = ({
  phraseBag: { mnemonic, wordList, randomWordIndex },
  goToSetupPhrase,
}) => {
  const onCreateUser = useStoreActions((actions) => actions.general.user.onCreateUser);
  const { control, handleSubmit, formState } = useForm({
    resolver: validations,
    context: { wordList, randomWordIndex },
  });
  const classes = useStyles();

  const onSubmit = handleSubmit(() => {
    onCreateUser({ mnemonic });
  });

  return (
    <>
      <Typography variant="h1" color="textPrimary" className={classes.header}>
        Verify Phrase
      </Typography>
      <Typography variant="body1" color="textSecondary" className={classes.subHeader}>
        Enter the following word from your recovery phrase to complete the setup process.
      </Typography>
      <form onSubmit={onSubmit} className={classes.form}>
        <TextField
          control={control}
          name="word"
          variant="outlined"
          fullWidth
          label={`#${randomWordIndex} Word`}
          error={Boolean(formState.errors?.word)}
          helperText={formState.errors?.word?.message}
        />
        <div className={classes.buttons}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={goToSetupPhrase}
          >
            Back
          </Button>
          <Button variant="contained" color="primary" className={classes.button} type="submit">
            Create Account
          </Button>
        </div>
      </form>
    </>
  );
};
