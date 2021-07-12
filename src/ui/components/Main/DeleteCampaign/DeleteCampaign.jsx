import { IconButton, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getCampaignName } from '../../../utils/formatCampaignData';
import { Start } from '../Campaigns/DeleteCampaign/Start/Start';
import { Progress } from '../Campaigns/DeleteCampaign/Progress/Progress';
import { routes } from '../../../config/routes';
import { useStyles } from './DeleteCampaign.styles';

export const DeleteCampaign = () => {
  const [isDeleting, setDeleting] = useState(false);
  const { campaignId } = useParams();
  const classes = useStyles();

  const campaignName = getCampaignName(campaignId);

  const onStartDeleting = () => setDeleting(true);

  return (
    <div className={classes.container}>
      <div className={classes.topbar}>
        <Link to={routes.campaigns}>
          <IconButton>
            <ArrowBack className={classes.icon} />
          </IconButton>
        </Link>
        <Typography variant="h3">Delete Campaign</Typography>
      </div>
      <div className={classes.body}>
        {isDeleting ? (
          <Progress />
        ) : (
          <Start onStartDeleting={onStartDeleting} campaignName={campaignName} />
        )}
      </div>
    </div>
  );
};
