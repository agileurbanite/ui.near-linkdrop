import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  button: {
    gridArea: 'f',
    height: 44,
  },
  icon: {
    '&:hover': {
      color: theme.colors.red,
    },
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 350,
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
    marginTop: 20,
  },
  refundContainer: {
    width: 110,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bold: {
    fontWeight: 700,
  },
  tooltip: {
    color: 'white',
    backgroundColor: '#3D5AFE',
    fontSize: 12,
    borderRadius: 8,
    padding: '8px 12px',
    fontWeight: 400,
  },
});

export const useStyles = makeStyles(styles, { name: 'RefundLink' });
