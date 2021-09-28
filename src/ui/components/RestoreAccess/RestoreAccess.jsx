import { Typography } from '@material-ui/core';
import { FingerprintOutlined } from '@material-ui/icons';
import { Form } from './Form/Form';
import { Footer } from '../Footer/Footer';
import { useStyles } from './RestoreAccess.styles';

export const RestoreAccess = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <FingerprintOutlined className={classes.icon} />
          <Typography variant="h1" color="textPrimary" className={classes.header}>
            Restore Access
          </Typography>
          <Typography variant="body1" color="textSecondary" className={classes.subHeader}>
            Enter a seed phrase associated with your Linkdrop account to restore access to it.
            <br />
            Be sure to follow the next pattern: &apos;word1 word2 ... word12&apos;
          </Typography>
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
};
