import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  }
};

export const useStyles = makeStyles(styles, { name: 'Links' });
