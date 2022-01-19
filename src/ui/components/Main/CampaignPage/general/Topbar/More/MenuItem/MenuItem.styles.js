import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    width: '100%',
    height: 20,
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'white',
    paddingLeft: 16,
  },
  icon: {
    color: theme.palette.text.secondary,
    marginRight: 6,
  },
  text: {
    fontWeight: 400,
    fontSize: 14,
    color: '#212121',
  },
});

export const useStyles = makeStyles(styles, { name: 'MenuItem' });
