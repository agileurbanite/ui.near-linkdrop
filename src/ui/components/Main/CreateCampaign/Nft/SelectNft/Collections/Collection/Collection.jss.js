import { makeStyles } from '@material-ui/core';

const styles = {
  container: {},
  topbar: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    height: 50,
    width: 50,
  },
  tokens: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20,
  },
};

export const useJss = makeStyles(styles, { name: 'Collection' });
