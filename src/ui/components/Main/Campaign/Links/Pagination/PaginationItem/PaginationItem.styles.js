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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 3px 0 3px',
    height: '32px',
    width: '32px',
    borderRadius: '16px',
    backgroundColor: '#3D5AFE',
  },
  spinner: {
    color: 'white',
    borderRadius: '50%',
  },
  svg: {
    fontSize: 18,
  },
};

export const useStyles = makeStyles(styles, { name: 'PaginationItem' });
