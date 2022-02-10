import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
  input: {
    width: 300,
  },
};

export const useJss = makeStyles(styles, { name: 'ClaimPage' });
