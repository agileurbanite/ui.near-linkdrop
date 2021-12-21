import { useStyles } from './Near.styles';
import { Topbar } from '../general/Topbar/Topbar';
import { CampaignInfo } from './CampaignInfo/CampaignInfo';

import { Links } from './Links/Links';

export const Near = ({ campaign }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Topbar campaign={campaign} />
      <div className={classes.body}>
        <CampaignInfo campaign={campaign} />
        <Links campaign={campaign} />
      </div>
    </div>
  );
};
