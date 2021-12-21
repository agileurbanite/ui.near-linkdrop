import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
  },
  icon: {
    width: 120,
    height: 120,
  },
};

export const useStyles = makeStyles(styles, { name: 'CampaignIcon' });
