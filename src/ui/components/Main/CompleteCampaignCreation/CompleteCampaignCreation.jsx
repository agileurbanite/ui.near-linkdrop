import { useStoreActions } from 'easy-peasy';
import { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './CompleteCampaignCreation.styles';

export const CompleteCampaignCreation = () => {
  // const pendingCampaign = useStoreState((store) => store.campaigns.pendingCampaign);
  const onCompleteCampaignCreation = useStoreActions(
    (actions) => actions.campaigns.onCompleteCampaignCreation,
  );
  const classes = useStyles();

  useEffect(() => {
    onCompleteCampaignCreation();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.topbar}>
        <Typography variant="h3">Complete Campaign Creation</Typography>
      </div>
    </div>
  );
};
