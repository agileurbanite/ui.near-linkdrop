import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    height: '100%',
    display: 'flex',
    marginTop: 24,
  },
  section: {
    minWidth: 120,
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
    textTransform: 'capitalize'
  }
});

export const useStyles = makeStyles(styles, { name: 'AdditionalData' });
