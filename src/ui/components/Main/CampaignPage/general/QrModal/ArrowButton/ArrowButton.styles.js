import { makeStyles } from '@material-ui/core';

const styles = {
  arrow: {
    height: 33,
    width: 33,
    '@media (max-width: 800px)': {
      height: 25,
      width: 25,
    },
  },
  arrowBack: {
    alignItems: 'center',
    textAlign: 'center',
  },
  button: {
    '@media (max-width: 800px)': {
      height: 25,
      width: 25,
    },
  },
};

export const useStyles = makeStyles(styles, { name: 'ArrowButton' });
