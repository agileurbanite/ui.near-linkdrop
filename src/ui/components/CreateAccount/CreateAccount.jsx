import { Typography, Button } from '@material-ui/core';
import { useStoreActions } from 'easy-peasy';
import { generateMnemonic } from 'bip39-light';
import { Footer } from '../Footer/Footer';
import { useStyles } from './CreateAccount.styles';

export const CreateAccount = () => {
  const onCreateUser = useStoreActions((actions) => actions.general.user.onCreateUser);
  const classes = useStyles();

  const mnemonic = generateMnemonic();
  const createUser = () => onCreateUser({ mnemonic });

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <Typography variant="h1" color="textPrimary" className={classes.header}>
            Create Linkdrop Account
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.title}>
            Mnemonic phrase - {mnemonic}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={createUser}
          >
            Create Account
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};
