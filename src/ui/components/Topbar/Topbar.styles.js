import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    width: '100vw',
    height: '72px',
    '@media (max-width: 800px)': {
      height: 'auto',
    },
    display: 'grid',
    gridTemplateColumns: '24px auto auto 48px',
    gridTemplateRows: '100%',
    gridTemplateAreas: `
      '. a b .'
    `,
    borderBottom: '1px solid #00000020',
  },
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
  account: {
    gridArea: 'b',
    justifySelf: 'end',
    alignSelf: 'center',
  },
  progress: {
    height: 5,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  toolbar: {
    borderBottom: '1px solid #00000020',
  },
  menuButton: {
    marginRight: 16,
    marginLeft: -12,
  },
  rightToolbar: {
    marginLeft: 'auto',
    marginRight: -12,
  },
  menu: {
    width: 250,
  },
};

export const useStyles = makeStyles(styles, { name: 'Topbar' });
