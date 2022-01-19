import { useEffect, useState } from 'react';
import { useStoreActions } from 'easy-peasy';
import { CircularProgress } from '@material-ui/core';
import { ScheduleOutlined } from '@material-ui/icons';
import { useStyles } from './Progress.styles';
import { campaignTypes } from '../../../../../../../config/campaignStatus';

export const Progress = ({ campaignId, onFinishDeleting, campaignType }) => {
  const onDeleteNearCampaign = useStoreActions((actions) => actions.campaigns.onDeleteNearCampaign);
  const onDeleteNftCampaign = useStoreActions((actions) => actions.campaigns.onDeleteNftCampaign);
  const [progress, setProgress] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    campaignType === campaignTypes.near &&
      onDeleteNearCampaign({ campaignId, onFinishDeleting, setProgress });
    campaignType === campaignTypes.nft && onDeleteNftCampaign({ onFinishDeleting });
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
