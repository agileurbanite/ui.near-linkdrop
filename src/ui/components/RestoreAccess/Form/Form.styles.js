import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    width: '100%',
    minHeight: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 24,
  },
  button: {
    marginTop: 24,
    padding: '16px 35px',
    fontWeight: 500,
  },
};

export const useStyles = makeStyles(styles, { name: 'Form' });
