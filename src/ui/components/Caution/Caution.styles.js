import { makeStyles } from '@material-ui/core';

const styles = theme => ({
  container: {
    width: '100vw',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.light,
    color: '#ffffff',
    fontSize: 12,
  },
  icon: {
    fontSize: 20,
  },
  caution: {
    fontWeight: 700,
    letterSpacing: 0.5,
    margin: '0 8px 0 4px'
  },
  bold: {
    fontWeight: 700,
  }
});

export const useStyles = makeStyles(styles, { name: 'Caution' });
