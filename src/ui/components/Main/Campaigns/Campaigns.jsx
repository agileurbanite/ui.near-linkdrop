import { Typography } from '@material-ui/core';
import { NoCampaigns } from './NoCampaigns/NoCampaigns';
import { useStyles } from './Campaigns.styles';

export const Campaigns = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.topbar}>
        <Typography variant="h3">Campaigns</Typography>
      </div>
      <NoCampaigns />
    </div>
  );
};
