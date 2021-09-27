import { CircularProgress, Modal, Paper } from '@material-ui/core';
import { ScheduleOutlined } from '@material-ui/icons';
import { useStoreActions } from 'easy-peasy';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from './CreateCampaignModal.styles';

export const CreateCampaignModal = ({ data }) => {
  const [progress, setProgress] = useState(0);
  const onFinishCampaignCreation = useStoreActions(
    (actions) => actions.campaigns.onFinishCampaignCreation,
  );
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    onFinishCampaignCreation({ history, data, setProgress });
  }, []);

  return (
    <Modal open className={classes.modal}>
      <Paper className={classes.container} elevation={3}>
        <div className={classes.wrapper}>
          <ScheduleOutlined className={classes.icon} />
          <h1 className={classes.header}>
            <span>{data.campaignName}</span> creation in progress
          </h1>
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
            until the creation is complete
          </p>
        </div>
      </Paper>
    </Modal>
  );
};
