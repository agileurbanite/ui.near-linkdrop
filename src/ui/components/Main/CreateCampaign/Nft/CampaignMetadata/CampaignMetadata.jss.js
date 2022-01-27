import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
  },
};

export const useJss = makeStyles(styles, { name: 'CampaignMetadata' });
