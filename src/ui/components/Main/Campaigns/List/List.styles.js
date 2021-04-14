import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    gridArea: 'b',
    display: 'inline-flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
};

export const useStyles = makeStyles(styles, { name: 'List' });
