import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    height: 'calc(100vh - 73px - 52px)', // height of topbar and footer
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export const useStyles = makeStyles(styles, { name: 'ConnectWallet' });
