import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: '16px 72px auto',
    gridTemplateAreas: `
      '.'
      'a'
      'b'
    `,
  },
  topbar: {
    gridArea: 'a',
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
});

export const useStyles = makeStyles(styles, { name: 'CompleteCampaignCreation' });
