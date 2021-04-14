import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    height: 160,
    width: 350,
    marginTop: 24,
  }
};

export const useStyles = makeStyles(styles, { name: 'Campaign' });
