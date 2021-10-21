import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: 0.4,
    color: theme.palette.text.primary,
    margin: 0,
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 8,
    borderRadius: 8,
    '@media (min-width: 1024px)': {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: '#3d5afe',
    },
  },
  section: {
    height: 35,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (min-width: 1024px)': {
      height: 'auto',
      width: 'auto',
      flexDirection: 'column',
    },
  },
  label: {
    fontSize: 12,
    letterSpacing: 0.4,
    color: theme.palette.text.secondary,
    fontWeight: 500,
    '@media (min-width: 1024px)': {
      color: '#ffffffbf',
    },
  },
  value: {
    fontWeight: 600,
    marginTop: 2,
    '@media (min-width: 1024px)': {
      color: 'white',
    },
  },
});

export const useStyles = makeStyles(styles, { name: 'KeysStatistic' });
