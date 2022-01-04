import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    height: 50,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  statusBar: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 20,
  },
  actions: {
    marginRight: 8,
  },
  copyButtonIcon: {
    '&:hover': {
      color: '#3D5AFE',
    },
  },
  tooltip: {
    color: 'white',
    backgroundColor: '#3D5AFE',
    fontSize: 12,
    borderRadius: 8,
    padding: '8px 12px',
    fontWeight: 400,
  },
};

export const useStyles = makeStyles(styles, { name: 'Link' });
