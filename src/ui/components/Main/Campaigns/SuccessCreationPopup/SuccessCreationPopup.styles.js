import { makeStyles } from '@material-ui/core';

const styles = {
  button: {
    gridArea: 'd',
    height: 24,
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 390,
    display: 'flex',
    flexDirection: 'column',
    outline: 'none',
    borderRadius: 8,
    padding: 16,
  },
  header: {
    fontWeight: 700,
    textAlign: 'center',
    margin: '16px 0 0 0',
  },
  amount: {
    fontWeight: 700,
  },
  footer: {
    height: 52,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
};

export const useStyles = makeStyles(styles, { name: 'SuccessCreationPopup' });
