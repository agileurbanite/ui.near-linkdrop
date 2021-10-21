import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 24,
    '@media (min-width: 1024px)': {
      width: 'auto',
      flexDirection: 'row',
    },
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (min-width: 1024px)': {
      minWidth: 120,
      flexDirection: 'column',
    },
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
    height: 1,
    width: '100%',
    margin: '12px 0',
    '@media (min-width: 1024px)': {
      height: '100%',
      width: 1,
      margin: '0 12px',
    },
  },
  statusValue: {
    fontWeight: 600,
    color: theme.palette.primary.main,
    textTransform: 'capitalize',
  },
});

export const useStyles = makeStyles(styles, { name: 'AdditionalData' });
