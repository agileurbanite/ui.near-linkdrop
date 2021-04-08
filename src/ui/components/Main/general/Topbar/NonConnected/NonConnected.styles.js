import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  connectWalletButton: {
    borderRadius: 4,
    borderColor: theme.colors.dividerOnWhite,
    textTransform: 'none',
    padding: '3px 16px 3px 8px',
  },
  buttonContent: {
    display: 'flex',
  },
});

export const useStyles = makeStyles(styles, { name: 'NonConnected' });
