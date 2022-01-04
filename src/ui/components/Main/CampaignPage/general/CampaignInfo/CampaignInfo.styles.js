import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    width: '84.445%',
    backgroundColor: '#FFFFFF',
    marginTop: 31,
    borderRadius: 8,
    padding: '25px 20px',
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '32.895% 20px auto',
    gridTemplateRows: '195px 25px 30px',
    gridTemplateAreas: `
      'a . b'
      'a . .'
      'a . c'
    `,
  },
  campaignIcon: {
    gridArea: 'a',
  },
  info: {
    gridArea: 'b',
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
  tooltip:{
    color: 'white',
    backgroundColor: '#3D5AFE',
    fontSize: 12,
    borderRadius: 5,
    padding: '8px 12px',
    fontWeight: 400,
  },
};

export const useStyles = makeStyles(styles, { name: 'CampaignInfo' });
