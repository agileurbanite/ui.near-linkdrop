import { makeStyles } from '@material-ui/core';

const styles = {
  logo: {
    gridArea: 'a',
    fontSize: 24,
    fontWeight: 500,
    alignSelf: 'center',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    '&>img': {
      marginRight: 10,
    },
    '@media (max-width: 800px)': {
      '&>img': {
        height: 32,
        width: 32,
      },
    },
  },
  toolbar: {
    borderBottom: '1px solid #00000020',
  },
  menuButton: {
    marginRight: 16,
    edge: 'start',
    color: 'inherit',
    ariaLabel: 'menu',
    ariaHaspopup: true,
  },
  rightToolbar: {
    marginLeft: 'auto',
  },
};

export const useStyles = makeStyles(styles, { name: 'MobileToolbar' });
