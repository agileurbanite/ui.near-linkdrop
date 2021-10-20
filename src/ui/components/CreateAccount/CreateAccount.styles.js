import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    minHeight: 'calc(100vh - 40px - 73px - 52px)', // caution + topbar + footer
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '7vh',
    marginRight: 24,
    marginLeft: 24,
    flexWrap: 'wrap',
  },
};

export const useStyles = makeStyles(styles, { name: 'CreateAccount' });
