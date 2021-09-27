import { makeStyles } from '@material-ui/core';
import { theme } from '../../config/theme';

const styles = {
  container: {
    minHeight: 'calc(100vh - 73px - 52px - 50px)', // caution + topbar + footer
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F8FA',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2),
  },
  emoji: {
    fontSize: 80,
  },
  header: {
    fontSize: 34,
    fontWeight: 700,
    letterSpacing: 0.25,
    marginTop: 8,
    marginBottom: theme.spacing(2),
  },
  subHeader: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '22px',
    letterSpacing: '0px',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  title: {
    marginTop: 16,
    letterSpacing: 0.5,
  },
  strong: {
    color: '#212121',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#C9C9C9',
    whiteSpace: 'nowrap',
    margin: theme.spacing(0.5),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .MuiInputBase-input': {
      padding: 0,
    },
  },
  onSubmitError: {
    marginTop: 12,
    color: theme.colors.red,
  },
  input: {
    border: 0,
    padding: '8px 12px 8px 12px',
    borderRadius: theme.spacing(0.5),
    backgroundColor: '#FFF',
  },
  button: {
    borderRadius: theme.spacing(1),
    height: 48,
    fontWeight: 500,
    minWidth: 170,
    marginTop: theme.spacing(2),
  },
  [theme.breakpoints.down('xs')]: {
    responsiveDirection: {
      display: 'flex',
      width: '100%',
      margin: theme.spacing(1),
      flexDirection: 'column-reverse',
      marginBottom: theme.spacing(2),
      '& button': {
        marginRight: 0,
        marginTop: theme.spacing(2),
      },
    },
  },
  [theme.breakpoints.down('lg')]: {
    responsiveDirection: {
      display: 'flex',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      '& button': {
        marginRight: theme.spacing(0),
      },
      '& button:nth-child(1)': {
        marginRight: theme.spacing(1),
      },
    },
  },
};

export const useStyles = makeStyles(styles, { name: 'CreateAccount' });
