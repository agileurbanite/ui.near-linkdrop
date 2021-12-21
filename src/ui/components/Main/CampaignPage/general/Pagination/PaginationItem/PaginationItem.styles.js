import { makeStyles } from '@material-ui/core';

const styles = {
  root: {
    fontWeight: 500,
    color: '#636364',
  },
  icon: {
    color: '#3D5AFE',
  },
  selected: {
    color: 'white',
    backgroundColor: '#3D5AFE',
  },
  disabled: {
    opacity: '1 !important',
  },
  loaderWrapper: {
    height: 32,
    width: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 3px 0 3px',
    borderRadius: 16,
    backgroundColor: '#3D5AFE',
  },
  spinner: {
    color: 'white',
    borderRadius: '50%',
  },
};

export const useStyles = makeStyles(styles, { name: 'PaginationItem' });
