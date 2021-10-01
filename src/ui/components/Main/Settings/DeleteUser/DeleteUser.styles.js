import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
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
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '22px',
    letterSpacing: '0px',
    textAlign: 'center',
    marginTop: 8,
  },
  button: {
    marginTop: 20,
    padding: '12px 36px',
    borderRadius: 8,
    boxShadow: 'none',
  },
};

export const useStyles = makeStyles(styles, { name: 'DeleteUser' });
