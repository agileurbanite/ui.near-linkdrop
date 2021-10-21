import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: '16px max-content auto',
    gridTemplateAreas: `
      '.'
      'a'
      'b'
    `,
  },
  topbar: {
    gridArea: 'a',
    minHeight: 72,
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #00000020',
  },
  closeIcon: {
    height: 36,
    width: 36,
    color: theme.palette.text.primary,
    margin: '0 8px',
  },
  campaignName: {
    width: '90%',
    wordBreak: 'break-all',
    overflowWrap: 'anywhere',
  },
  body: {
    gridArea: 'b',
    width: '100%',
    justifySelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (min-width: 1024px)': {
      minWidth: 680,
      maxWidth: 900,
    },
  },
});

export const useStyles = makeStyles(styles, { name: 'Campaign' });
