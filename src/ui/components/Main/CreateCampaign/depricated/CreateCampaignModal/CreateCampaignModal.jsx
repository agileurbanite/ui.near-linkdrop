/* eslint-disable */
import { LinearProgress, Modal, Paper } from '@material-ui/core';
import { useStoreActions } from 'easy-peasy';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from './CreateCampaignModal.styles';
import clock from '../../../../../images/clock.png';

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
          <img src={clock} alt="a clock" className={classes.icon} />
          <h1 className={classes.header}>Create Campaign</h1>
          <p className={classes.description}>Don`t close until the process is complete</p>
          <span className={classes.progressLabel}>{progress}%</span>
          <LinearProgress
            variant="determinate"
            color="primary"
            value={progress}
            className={classes.progress}
            classes={{ bar: classes.progressBar }}
          />
        </div>
      </Paper>
    </Modal>
  );
};
