import { Typography } from '@material-ui/core';
import key from '../../images/key.png';
import { Form } from './Form/Form';
import { Footer } from '../Footer/Footer';
import { useStyles } from './RestoreAccess.styles';

export const RestoreAccess = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <img src={key} alt="key" className={classes.icon} />
          <Typography variant="h1" color="textPrimary" className={classes.header}>
            Restore Account
          </Typography>
          <Typography variant="body1" className={classes.description}>
            Enter the seed phrase to restore your account
          </Typography>
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
};
