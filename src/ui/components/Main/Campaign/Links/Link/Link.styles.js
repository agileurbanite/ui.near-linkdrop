import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    height: 56,
    display: 'grid',
    gridTemplateColumns: '42px 60px auto 130px 24px 16px 24px',
    gridTemplateRows: '100%',
    gridTemplateAreas: `
      'a b c d e . f'
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
    width: '80%',
    overflow: 'hidden',
    whiteSpace: 'pre-wrap',
    textOverflow: 'ellipsis',
    fontSize: 14,
  },
  copyButton: {
    gridArea: 'e',
  },
});

export const useStyles = makeStyles(styles, { name: 'Link' });
