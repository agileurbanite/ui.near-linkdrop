import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  header: {
    fontSize: 34,
    fontWeight: 700,
    letterSpacing: 0.25,
    marginTop: 8,
    marginBottom: theme.spacing(2),
  },
  subHeader: {
    width: '63%',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '22px',
    letterSpacing: '0px',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  form: {
    width: '63%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 16,
  },
  buttons: {
    width: '100%',
    marginTop: 24,
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: theme.spacing(1),
    height: 48,
    fontWeight: 500,
    minWidth: 150,
  },
});

export const useStyles = makeStyles(styles, { name: 'ValidatePhrase' });
