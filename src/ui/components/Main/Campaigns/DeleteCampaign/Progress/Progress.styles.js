import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
    letterSpacing: '0.5px',
  },
  icon: {
    height: 75,
    width: 75,
    marginTop: 30,
    color: theme.palette.primary.main,
  },
  header: {
    fontSize: 24,
  },
  progressContainer: {
    height: 100,
    width: 100,
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: '100%',
    gridTemplateAreas: `'a'`,
    marginTop: 20,
  },
  spinner: {
    gridArea: 'a',
    justifySelf: 'center',
    alignSelf: 'center',
  },
  spinnerCircle: {
    strokeWidth: 1,
  },
  progressLabel: {
    gridArea: 'a',
    justifySelf: 'center',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 700,
  },
  text: {
    marginTop: 50,
    '&>span': {
      fontWeight: 700,
    }
  }
});

export const useStyles = makeStyles(styles, { name: 'Progress' });
