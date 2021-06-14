import { useStoreActions } from 'easy-peasy';
import { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStyles } from './CompleteCampaignCreation.styles';

export const CompleteCampaignCreation = () => {
  const [isProgress, setProgress] = useState(true);
  const onCompleteCampaignCreation = useStoreActions(
    (actions) => actions.campaigns.onCompleteCampaignCreation,
  );
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      await onCompleteCampaignCreation({ history });
      setProgress(false);
    })();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.topbar}>
        <Typography variant="h3">Complete Campaign Creation</Typography>
      </div>
      <div className={classes.content}>
        {isProgress ? <span>Finish campaign creation...</span> : <span>Campaign created</span>}
      </div>
    </div>
  );
};
