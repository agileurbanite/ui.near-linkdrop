import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    gridArea: 'c',
    color: 'white',
    width: 'calc(100% - 24px)',
    '@media (max-width: 800px)': {
      width: '100%',
    },
  },
};

export const useStyles = makeStyles(styles, { name: 'Navigation' });
