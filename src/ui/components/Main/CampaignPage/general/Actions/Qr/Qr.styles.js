import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  button: {
    gridArea: 'g',
  },
  icon: {
    height: 20,
    width: 20,
    fill: 'rgba(0, 0, 0, 0.54)',
    flexShrink: 0,
    '&:hover': {
      fill: theme.palette.primary.main,
    },
  },
  container: {
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    outline: 'none',
    borderRadius: 8,
    padding: '24px 24px 16px 24px',
  },
  header: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.87)',
    margin: 0,
    textAlign: 'center',
  },
  description: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 14,
    textAlign: 'center',
  },
  qrWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
  },
  close: {
    color: 'rgba(0, 0, 0, 0.6)',
    letterSpacing: 1.25,
    padding: 0,
    fontSize: 12,
    fontWeight: 700,
  },
});

export const useStyles = makeStyles(styles, { name: 'Qr' });
