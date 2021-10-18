import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    width: '100vw',
    minHeight: 'calc(100vh - 40px - 73px)', // height of topbar + caution
    display: 'grid',
    gridTemplateColumns: '256px auto',
    gridTemplateRows: 'auto 52px',
    gridTemplateAreas: `
      'a b'
      'a c'
    `,
    '@media (max-width: 800px)': {
      minHeight: 'calc(100vh - 40px - 57px)',
      gridTemplateAreas: `
      'b'
      'c'
    `,
      gridTemplateColumns: 'auto',
    },
  },
  pages: {
    gridArea: 'b',
    display: 'flex',
    justifyContent: 'center',
  },
  pagesWrapper: {
    width: 'calc(100% - 48px - 48px)',
  },
  footer: {
    gridArea: 'c',
  },
};

export const useStyles = makeStyles(styles, { name: 'Main' });
