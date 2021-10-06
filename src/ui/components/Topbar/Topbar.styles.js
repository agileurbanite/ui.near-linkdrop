import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    width: '100vw',
    height: '72px',
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
    }
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
};

export const useStyles = makeStyles(styles, { name: 'Topbar' });
