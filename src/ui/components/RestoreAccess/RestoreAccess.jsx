import { Typography } from '@material-ui/core';
import { Form } from './Form/Form';
import { Footer } from '../Footer/Footer';
import { useStyles } from './RestoreAccess.styles';

export const RestoreAccess = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <Typography variant="h1" color="textPrimary" className={classes.header}>
            Restore Access to your Linkdrop account
          </Typography>
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
};
