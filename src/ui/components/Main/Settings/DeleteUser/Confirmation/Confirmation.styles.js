import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 380,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    outline: 'none',
    borderRadius: 8,
  },
  emoji: {
    fontSize: 80,
    marginTop: 54,
  },
  header: {
    fontSize: 24,
    fontWeight: 500,
    margin: 0,
    marginTop: 24,
    color: theme.colors.grey500,
  },
  description: {
    textAlign: 'center',
    margin: 0,
    marginTop: 12,
    fontWeight: 400,
    color: theme.colors.grey450,
    lineHeight: '22px',
    '&>span': {
      fontWeight: 500,
      color: theme.colors.grey500,
    },
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 53,
  },
  button: {
    width: 156,
    height: 48,
    borderRadius: 8,
    margin: '0 9px'
  },
});

export const useStyles = makeStyles(styles, { name: 'Confirmation' });
