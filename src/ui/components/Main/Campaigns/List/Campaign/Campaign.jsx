import { useHistory } from 'react-router-dom';
import { Divider, Typography } from '@material-ui/core';
import cn from 'classnames';
import { More } from './More/More';
import { getTotalAmount, getTime } from '../../../../../utils/formatCampaignData';
import { getRoute } from '../../../../../config/routes';
import { useStyles } from './Campaign.styles';

export const Campaign = ({
  campaign: { campaignId, name, icon, totalLinks, amountPerLink, createdAt },
}) => {
  const { push } = useHistory();
  const classes = useStyles();

  const goToCampaign = () => push(getRoute.campaign(campaignId));

  return (
    <div
      className={classes.container}
      onClick={goToCampaign}
      onKeyPress={goToCampaign}
      role="button"
      tabIndex={0}
    >
      <span className={classes.icon}>{icon}</span>
      <Typography className={classes.name} noWrap>
        {name}
      </Typography>
      <span className={classes.totalNear}>{getTotalAmount(amountPerLink, totalLinks)}</span>
      <More campaignId={campaignId} />

      <span className={cn(classes.label, classes.links)}>Links</span>
      <span className={cn(classes.value, classes.linksValue)}>{totalLinks}</span>

      <Divider className={cn(classes.divider, classes.divider1)} />

      <span className={cn(classes.label, classes.created)}>Created</span>
      <span className={cn(classes.value, classes.createdValue)}>{getTime(createdAt)}</span>

      <Divider className={cn(classes.divider, classes.divider2)} />

      <span className={cn(classes.label, classes.status)}>Status</span>
      <span className={cn(classes.value, classes.statusValue)}>Active</span>
    </div>
  );
};
