import { Typography, Button } from '@material-ui/core';
import { emoji } from '../../config/emoji';
import { Footer } from '../Footer/Footer';
import { useStyles } from './ConnectWallet.styles';

export const ConnectWallet = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <span className={classes.emoji}>{emoji.handRaisedMan}</span>
          <Typography variant="h1" color="textPrimary" className={classes.header}>
            Connect Wallet
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.title}>
            Connect your wallet to start work with the application
          </Typography>
          <Button variant="contained" color="primary" className={classes.button}>
            Connect Wallet
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};
