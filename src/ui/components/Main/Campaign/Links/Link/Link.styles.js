import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    height: 56,
    display: 'grid',
    gridTemplateColumns: '56px 56px auto 24px 24px 24px 16px',
    gridTemplateRows: '100%',
    gridTemplateAreas: `
      'a b c d . e .'
    `,
    alignItems: 'center',
    color: (isActive) => (isActive ? theme.palette.text.primary : theme.palette.text.disabled),
  },
  checkbox: {
    gridArea: 'a',
    justifySelf: 'start',
  },
  order: {
    gridArea: 'b',
  },
  publicKey: {
    gridArea: 'c',
  },
  cancel: {
    gridArea: 'd',
    height: 24,
  },
  copyButton: {
    gridArea: 'e',
    height: 24,
  },
});

export const useStyles = makeStyles(styles, { name: 'Link' });
