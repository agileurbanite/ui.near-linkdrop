import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '30px 0',
  },
};

export const useJss = makeStyles(styles, { name: 'Collections' });
