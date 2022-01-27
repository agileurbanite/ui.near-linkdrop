import { LinearProgress } from '@material-ui/core';
import { useStoreActions } from 'easy-peasy';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import clock from '../../../../../images/clock.png';
import { useJss } from './CreationProgress.jss';

export const CreationProgress = () => {
  const [progress, setProgress] = useState(0);
  const createNftCampaign = useStoreActions((a) => a.campaigns.createCampaign.createNftCampaign);
  const history = useHistory();
  const jss = useJss();

  useEffect(() => {
    createNftCampaign({ setProgress, history });
  }, []);

  return (
    <div className={jss.container}>
      <img src={clock} alt="a clock" className={jss.icon} />
      <h1 className={jss.header}>Create Campaign</h1>
      <p className={jss.description}>Don`t close until the process is complete</p>
      <span className={jss.progressLabel}>{progress}%</span>
      <LinearProgress
        variant="determinate"
        color="primary"
        value={progress}
        className={jss.progress}
        classes={{ bar: jss.progressBar }}
      />
    </div>
  );
};
