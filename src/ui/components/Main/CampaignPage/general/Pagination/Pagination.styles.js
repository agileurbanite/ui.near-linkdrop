import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '28px 0 140px',
  },
  pageInfo: {
    width: 200,
    display: 'flex',
    justifyContent: 'center',
  },
};

export const useStyles = makeStyles(styles, { name: 'Pagination' });
