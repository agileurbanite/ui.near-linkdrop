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
  tooltip:{
    color: 'white',
    backgroundColor: '#3D5AFE',
    fontSize: 12,
    borderRadius: 8,
    padding: '8px 12px',
    fontWeight: 400,
  },
});

export const useStyles = makeStyles(styles, { name: 'Qr' });
