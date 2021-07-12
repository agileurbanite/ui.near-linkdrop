import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
    letterSpacing: '0.5px',
  },
  icon: {
    height: 75,
    width: 75,
    marginTop: 30,
    color: theme.colors.red,
  },
  header: {
    fontSize: 24,
    '&>span': {
      color: theme.palette.primary.main,
    },
  },
  mainText: {
    letterSpacing: '0.25px',
    '&>span': {
      fontWeight: 700,
    },
  },
  deleteButton: {
    backgroundColor: theme.colors.red,
    margin: '25px 0 25px 0',
    padding: '8px 26px',
    borderRadius: 8,
    minWidth: '60%',
  },
});

export const useStyles = makeStyles(styles, { name: 'Start' });
