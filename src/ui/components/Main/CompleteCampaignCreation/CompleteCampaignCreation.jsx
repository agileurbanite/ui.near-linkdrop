import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { routes } from '../../../config/routes';
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
