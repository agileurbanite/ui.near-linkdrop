import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  header: {
    fontSize: 34,
    fontWeight: 700,
    letterSpacing: 0.25,
    marginTop: 8,
    marginBottom: theme.spacing(2),
  },
  description: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '22px',
    letterSpacing: '0px',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    '&>span': {
      fontWeight: 700,
      color: theme.colors.grey500,
    },
  },
  strong: {
    color: '#212121',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 87)',
    whiteSpace: 'nowrap',
    margin: theme.spacing(0.5),
    '&>span': {
      color: theme.colors.dashboardGrey,
    },
  },
  button: {
    borderRadius: theme.spacing(1),
    height: 48,
    fontWeight: 500,
    width: 170,
    marginTop: theme.spacing(2),
    marginLeft: 10,
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
  [theme.breakpoints.down('md')]: {
    responsiveDirection: {
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
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
  [theme.breakpoints.down('xs')]: {
    responsiveDirection: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column-reverse',
      marginBottom: theme.spacing(2),
      '& button': {
        width: '100%',
        marginRight: 0,
        marginLeft: 0,
        marginTop: theme.spacing(2),
      },
      '& button:nth-child(1)': {
        marginLeft: 0,
        marginRight: 0,
      },
    },
  },
});

export const useStyles = makeStyles(styles, { name: 'SetupPhrase' });
