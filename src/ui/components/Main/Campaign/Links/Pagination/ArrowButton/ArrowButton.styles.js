import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    height: 48,
    width: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export const useStyles = makeStyles(styles, { name: 'ArrowButton' });
