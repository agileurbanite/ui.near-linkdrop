import { Link } from 'react-router-dom';
import { IconButton, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { useStyles } from './Topbar.styles';
import { routes } from '../../../../../../config/routes';
import { getCampaignName } from '../../../../../utils/formatCampaignData';
import { More } from './More/More';

export const Topbar = ({ campaign: { campaignId } }) => {
  const classes = useStyles();

  return (
    <div className={classes.topBar}>
      <Link to={routes.campaigns}>
        <IconButton>
          <ArrowBack className={classes.closeIcon} />
        </IconButton>
      </Link>
      <Typography variant="h3" className={classes.campaignName}>
        {getCampaignName(campaignId)}
      </Typography>
      <More campaignId={campaignId} />
    </div>
  );
};
