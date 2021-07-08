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
    height: 60,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: '#3d5afe',
    borderRadius: 8,
  },
  section: {
    minWidth: 80,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    letterSpacing: 0.4,
    color: '#ffffffbf',
  },
  value: {
    fontWeight: 600,
    color: 'white',
    marginTop: 2,
  },
});

export const useStyles = makeStyles(styles, { name: 'KeysStatistic' });
