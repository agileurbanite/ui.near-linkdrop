import { makeStyles } from '@material-ui/core';

const styles = () => ({
  container: {
    gridArea: 'b',
    alignSelf: 'center',
  },
  status: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '20px',
    color: '#3D5AFE',
    textTransform: 'capitalize',
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
