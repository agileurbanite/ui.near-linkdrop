import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    height: 'calc(100vh - 73px - 52px - 50px)', // caution + topbar + footer
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 80,
  },
  header: {
    fontSize: 34,
    fontWeight: 700,
    letterSpacing: 0.25,
    marginTop: 8,
  },
  title: {
    marginTop: 16,
    letterSpacing: 0.5,
  },
  button: {
    marginTop: 24,
    padding: '16px 35px',
    fontWeight: 500,
  },
};

export const useStyles = makeStyles(styles, { name: 'CreateAccount' });
