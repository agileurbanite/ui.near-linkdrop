import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    display: 'flex',
    marginTop: 24,
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 0.4,
    color: theme.palette.text.secondary,
  },
  value: {
    fontWeight: 600,
  },
  divider: {
    height: '100%',
    width: 1,
    margin: '0 12px',
  },
  statusValue: {
    fontWeight: 600,
    color: theme.palette.primary.main,
  }
});

export const useStyles = makeStyles(styles, { name: 'AdditionalData' });
