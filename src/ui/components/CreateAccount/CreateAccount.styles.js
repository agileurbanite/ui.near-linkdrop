import { makeStyles } from '@material-ui/core';
import {theme} from "../../config/theme";

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
  button: {
    marginTop: 24,
    borderRadius: theme.spacing(1),
    padding: '11px 35px',
    fontWeight: 500,
    minWidth: 170,
    marginRight: theme.spacing(2),
  },
  [theme.breakpoints.down('xs')]: {
    responsiveDirection: {
      flexDirection: 'column-reverse',
    },
  },
};

export const useStyles = makeStyles(styles, { name: 'CreateAccount' });
