import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    width: '100%',
    height: 56,
    display: 'grid',
    gridTemplateColumns: '50px auto 48%',
    gridTemplateRows: '50% 50%',
    gridTemplateAreas: `
      'a b d'
      'a c e'
    `,
    marginBottom: 72,
  },
  nearIcon: {
    gridArea: 'a',
    height: 20,
    width: 20,
    justifySelf: 'center',
    alignSelf: 'center',
  },
  walletId: {
    gridArea: 'b',
    alignSelf: 'end',
    color: theme.palette.text.secondary,
    fontSize: 12,
  },
  account: {
    gridArea: 'c',
    fontWeight: 500,
    color: theme.palette.text.primary,
    lineHeight: 1.5,
  },
  balance: {
    gridArea: 'd',
    alignSelf: 'end',
    color: theme.palette.text.secondary,
    fontSize: 12,
  },
  amount: {
    gridArea: 'e',
    fontWeight: 500,
    color: theme.palette.text.primary,
    lineHeight: 1.5,
  },
});

export const useStyles = makeStyles(styles, { name: 'Info' });
