import { makeStyles } from '@material-ui/core';

const getColor = ({ status }) => (status === 'Active' ? '#3D5AFE' : '#E0203C');

const styles = () => ({
  status: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '20px',
    color: (isActive) => getColor(isActive),
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  label: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '20px',
    color: '#636364',
  },
  value: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '20px',
    color: '#212121',
  },
});

export const useStyles = makeStyles(styles, { name: 'Info' });
