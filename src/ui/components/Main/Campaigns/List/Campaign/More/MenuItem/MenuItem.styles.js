import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    width: '100%',
    height: 56,
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    '&:hover': {},
    cursor: 'pointer',
    padding: 0,
  },
  icon: {
    color: theme.palette.primary.main,
    margin: '0 24px',
  },
  text: {
    fontWeight: 500,
    fontSize: 16,
    color: theme.palette.text.primary,
  },
});

export const useStyles = makeStyles(styles, { name: 'MenuItem' });
