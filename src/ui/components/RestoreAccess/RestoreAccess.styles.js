import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    height: 'calc(100vh - 73px - 52px - 50px)', // caution + topbar + footer
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    maxWidth: 580,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    height: 80,
    width: 80,
    color: theme.palette.primary.light,
  },
  header: {
    fontSize: 34,
    fontWeight: 700,
    letterSpacing: 0.25,
    marginTop: 24,
    marginBottom: theme.spacing(2),
  },
  subHeader: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '22px',
    letterSpacing: '0px',
    textAlign: 'center',
  },
});

export const useStyles = makeStyles(styles, { name: 'RestoreAccess' });
