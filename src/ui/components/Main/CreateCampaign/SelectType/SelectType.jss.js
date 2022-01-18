import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    margin: '40px 0 0 0',
    fontSize: 20,
    fontWeight: 500,
  },
  types: {
    display: 'flex',
    gap: 20,
  },
};

export const useJss = makeStyles(styles, { name: 'SelectType' });
