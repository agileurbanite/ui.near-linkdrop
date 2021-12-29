import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  icon: {
    height: 20,
    width: 20,
    fill: 'rgba(0, 0, 0, 0.54)',
    flexShrink: 0,
    '&:hover': {
      fill: theme.palette.primary.main,
    },
  },
});

export const useStyles = makeStyles(styles, { name: 'Qr' });
