import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: '16px 72px auto',
    gridTemplateAreas: `
      '.'
      'a'
      'c'
      'b'
    `,
  },
  topbar: {
    gridArea: 'a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #00000020',
    marginBottom: 16,
  },
  createCampaignWrapper: {
    gridArea: 'c',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createCampaign: {
    padding: '12px 26px',
    borderRadius: 8,
    boxShadow: 'none',
    width: '100%',
    '@media (max-width: 600px)': {
      marginTop: 16,
    },
  },
  addIcon: {
    marginRight: 12,
  },
  noCampaigns: {
    gridArea: 'b',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export const useStyles = makeStyles(styles, { name: 'Campaigns' });
