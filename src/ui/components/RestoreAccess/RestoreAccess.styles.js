import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    height: 'calc(100vh - 40px - 73px - 52px)', // caution + topbar + footer
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 650,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    height: 96,
    width: 96,
  },
  header: {
    fontSize: 34,
    fontWeight: 700,
    letterSpacing: 0.25,
    marginTop: 24,
    marginBottom: theme.spacing(2),
  },
  description: {
    fontSize: 16,
    color: theme.colors.grey450,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '22px',
    letterSpacing: 0,
    textAlign: 'center',
  },
});

export const useStyles = makeStyles(styles, { name: 'RestoreAccess' });
