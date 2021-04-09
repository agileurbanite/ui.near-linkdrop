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
    textTransform: 'uppercase',
    alignSelf: 'center',
  },
  account: {
    gridArea: 'b',
    justifySelf: 'end',
    alignSelf: 'center',
  },
  progress: {
    position: 'absolute',
    top: '70px',
    width: '100%',
  },
};

export const useStyles = makeStyles(styles, { name: 'Topbar' });
