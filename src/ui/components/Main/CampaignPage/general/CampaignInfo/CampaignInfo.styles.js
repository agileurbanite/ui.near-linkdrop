import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    width: '88.89%',
    backgroundColor: '#FFFFFF',
    marginTop: 31,
    borderRadius: 8,
  },
  wrapper: {
    margin: '25px 20px',
    display: 'grid',
    gridTemplateColumns: '34% 20px auto',
    gridTemplateRows: '195px 25px 30px',
    gridTemplateAreas: `
      'a . b'
      '. . .'
      'c c c'
    `,

    '@media (max-width: 600px)': {
      gridTemplateColumns: '100%',
      gridTemplateRows: '120px 25px 220px 30px',
      gridTemplateAreas: `
      'a'
      '.'
      'b'
      'c'
    `,
    },
  },
  campaignIcon: {
    gridArea: 'a',
  },
  analytics: {
    justifySelf: 'center',
    gridArea: 'c',
  },
  analyticsIcon: {
    height: 20,
    width: 20,
  },
  analyticsButton: {
    height: 30,
    width: 200,
    fontSize: 12,
    letterSpacing: '0.15px',
    backgroundColor: '#3D5AFE',
    borderRadius: 8,
    color: 'white',
    '&:hover': {
      backgroundColor: '#3D5AFE',
    },
  },
  tooltip: {
    color: 'white',
    backgroundColor: '#3D5AFE',
    fontSize: 12,
    borderRadius: 5,
    padding: '8px 12px',
    fontWeight: 400,
  },
};

export const useStyles = makeStyles(styles, { name: 'CampaignInfo' });
