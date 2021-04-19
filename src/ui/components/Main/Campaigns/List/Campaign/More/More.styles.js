import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  button: {
    gridArea: 'x',
    padding: 0,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  popover: {
    borderRadius: 8,
    border: '1px solid #4b5aae1e',
  },
  container: {
    width: 250,
    userSelect: 'none',
    padding: '8px 0',
  },
});

export const useStyles = makeStyles(styles, { name: 'More' });
