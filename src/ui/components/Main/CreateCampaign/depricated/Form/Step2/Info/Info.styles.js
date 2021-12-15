import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  info: {
    width: 320,
    display: 'flex',
    flexDirection: ' column',
    alignItems: 'center',
  },
  accountBlock: {
    width: '100%',
    height: 56,
    display: 'grid',
    gridTemplateColumns: '40px auto',
    gridTemplateRows: '50% 50%',
    gridTemplateAreas: `
      'a b'
      'a c'
    `,
    marginTop: 36,
  },
  nearIcon: {
    gridArea: 'a',
    height: 20,
    width: 20,
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
  balanceBlock: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 16,
    alignSelf: 'flex-start',
  },
  balance: {
    color: theme.palette.text.secondary,
    fontSize: 12,
  },
  amount: {
    fontWeight: 500,
    color: theme.palette.text.primary,
    lineHeight: 1.5,
  },
  totalValueContainer: {
    width: '100%',
    margin: '32px 0',
  },
  label: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    '&:first-child': {
      marginTop: 0,
    },
  },
  labelDescription: {
    width: '65%',
    color: theme.palette.text.secondary,
    fontSize: 14,
  },
  labelValue: {
    fontSize: 14,
  },
  total: {
    fontWeight: 500,
  },
  '@media (max-width: 600px)': {
    info: {
      width: '100%',
    },
  },
});

export const useStyles = makeStyles(styles, { name: 'Info' });
