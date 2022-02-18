import { CircularProgress } from '@material-ui/core';
import { ScheduleOutlined } from '@material-ui/icons';
import { useStoreActions } from 'easy-peasy';
import { useEffect, useState } from 'react';
import { campaignTypes } from '../../../../../../../config/campaignStatus';
import { useStyles } from './Progress.styles';

export const Progress = ({ campaignId, onFinishDeleting, campaignType }) => {
  const onDeleteNearCampaign = useStoreActions((actions) => actions.campaigns.onDeleteNearCampaign);
  const onDeleteNftCampaign = useStoreActions((actions) => actions.campaigns.onDeleteNftCampaign);
  const [progress, setProgress] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    // TODO Refactor and move
    if (campaignType === campaignTypes.near.type) {
      onDeleteNearCampaign({ campaignId, onFinishDeleting, setProgress });
    }
    if (campaignType === campaignTypes.nft.type) {
      onDeleteNftCampaign({ onFinishDeleting });
    }
  }, []);

  return (
    <div className={classes.container}>
      <ScheduleOutlined className={classes.icon} />
      <h1 className={classes.header}>Deletion in progress</h1>
      <div className={classes.progressContainer}>
        <CircularProgress
          size={90}
          className={classes.spinner}
          classes={{
            circle: classes.spinnerCircle,
          }}
        />
        <span className={classes.progressLabel}>&nbsp;{progress}%</span>
      </div>
      <p className={classes.text}>
        Please <span>DO NOT</span> leave this page <br />
        until the deletion is complete
      </p>
    </div>
  );
};
