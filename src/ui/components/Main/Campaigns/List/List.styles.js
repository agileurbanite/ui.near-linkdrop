import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    gridArea: 'b',
    display: 'flex',
    justifyContent: 'center',
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
  },
};

export const useStyles = makeStyles(styles, { name: 'List' });
