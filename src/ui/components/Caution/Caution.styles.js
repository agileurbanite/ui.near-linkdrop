import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    width: '100vw',
    minHeight: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.light,
    color: '#ffffff',
    fontSize: 12,
  },
  icon: {
    fontSize: 20,
    marginRight: 4,
  },
  caution: {
    fontWeight: 700,
    letterSpacing: 0.5,
    marginRight: 4,
  },
  bold: {
    fontWeight: 700,
  },
});

export const useStyles = makeStyles(styles, { name: 'Caution' });
