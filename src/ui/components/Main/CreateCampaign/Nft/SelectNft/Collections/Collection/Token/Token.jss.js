import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  media: {
    height: 100,
    width: 100,
  },
};

export const useJss = makeStyles(styles, { name: 'Token' });
