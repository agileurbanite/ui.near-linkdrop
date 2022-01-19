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
    color: '#43a047',
  },
  header: {
    fontSize: 24,
  },
  text: {
    marginTop: 70,
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    marginTop: 55,
    padding: '8px 26px',
    borderRadius: 8,
    minWidth: '60%',
    '&:hover': {
      backgroundColor: '#082dff',
    },
  },
});

export const useStyles = makeStyles(styles, { name: 'Finish' });
