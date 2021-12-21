import { makeStyles } from '@material-ui/core';

const getBackgroundColor = ({ status }) => (status === 'Active' ? '#3D5AFE' : '#C9C9C9');

const styles = {
  container: {
    gridArea: 'd',
    marginRight: 15.23,
    width: 16,
    height: 16,
    backgroundColor: (isActive) => getBackgroundColor(isActive),
    borderRadius: '50%',
  },
};

export const useStyles = makeStyles(styles, { name: 'Status' });
