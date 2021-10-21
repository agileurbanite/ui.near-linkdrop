import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    gridArea: 'b',
    display: 'flex',
    justifySelf: 'center',
  },
  wrapper: {
    maxWidth: 350,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    '@media (min-width: 1065px)': {
      maxWidth: 713,
    },
    '@media (min-width: 1440px)': {
      maxWidth: 1088,
    },
    '@media (max-width: 800px)': {
      flexWrap: 'nowrap',
      flex: '50%',
      maxWidth: 'none',
    },
    '@media (max-width: 690px)': {
      flex: '100%',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
};

export const useStyles = makeStyles(styles, { name: 'List' });
