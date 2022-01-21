import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 30,
    // backgroundColor: '#ffd5d5',
  },
  topbar: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    height: 50,
    width: 50,
  },
  tokens: {
    width: 700,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20,
  },
};

export const useJss = makeStyles(styles, { name: 'Collection' });
