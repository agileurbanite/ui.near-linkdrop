import { Button } from '@material-ui/core';
import { useStyles } from './NonConnected.styles';

export const NonConnected = () => {
  const classes = useStyles();

  return (
    <Button variant="outlined" color="primary" className={classes.connectWalletButton}>
      Connect wallet
    </Button>
  );
};
