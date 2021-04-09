import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    gridArea: 'c',
    color: 'white',
    width: 'calc(100% - 24px)',
  },
};

export const useStyles = makeStyles(styles, { name: 'Navigation' });
