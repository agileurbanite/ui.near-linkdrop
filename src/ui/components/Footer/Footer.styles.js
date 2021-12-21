import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    width: '100%',
    height: '52px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.colors.grey450,
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 12,
    fontWeight: 400,
  },
});

export const useStyles = makeStyles(styles, { name: 'Footer' });
