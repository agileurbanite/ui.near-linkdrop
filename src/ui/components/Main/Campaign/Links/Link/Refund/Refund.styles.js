import { makeStyles } from '@material-ui/core';

const styles = {
  button: {
    gridArea: 'f',
    height: 24,
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    outline: 'none',
    borderRadius: 8,
    padding: 16,
  },
  header: {
    fontWeight: 700,
    textAlign: 'center',
  },
  amount: {
    fontWeight: 700,
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  refundContainer: {
    width: 110,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export const useStyles = makeStyles(styles, { name: 'CancelLink' });
