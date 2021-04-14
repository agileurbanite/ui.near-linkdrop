import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    height: 56,
    display: 'grid',
    gridTemplateColumns: '56px 56px auto 56px 56px',
    gridTemplateRows: '100%',
    gridTemplateAreas: `
      'a b c d e'
    `,
    alignItems: 'center',
  },
  order: {
    gridArea: 'b',
  },
  publicKey: {
    gridArea: 'c',
  },
  copyButton: {
    gridArea: 'e',
  },
};

export const useStyles = makeStyles(styles, { name: 'Link' });
