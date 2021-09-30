import { useHistory } from 'react-router-dom';
import { Divider, Typography } from '@material-ui/core';
import cn from 'classnames';
import { campaignStatus } from '../../../../../../config/campaignStatus';
import { More } from './More/More';
import { ResumeAction } from './ResumeAction/ResumeAction';
import { getTotalAmount, getDate, getCampaignName } from '../../../../../utils/formatCampaignData';
import { getRoute } from '../../../../../../config/routes';
import { useStyles } from './Campaign.styles';

export const Campaign = ({ campaign }) => {
  const { campaignId, icon, keysStats, tokensPerKey, createdAt, status } = campaign;
  const isUncompleted =
    campaign.status === campaignStatus.creation || campaign.status === campaignStatus.deletion;

  const { push } = useHistory();
  const classes = useStyles({ isUncompleted });

  const goToCampaign = () => {
    if (isUncompleted) return;
    push(getRoute.campaign(campaignId));
  };

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
        {getCampaignName(campaignId)}
      </Typography>
      <span className={classes.totalNear}>{getTotalAmount(tokensPerKey, keysStats.total)}</span>
      {isUncompleted ? (
        <ResumeAction campaign={campaign} />
      ) : (
        <>
          <More campaignId={campaignId} />
          <span className={cn(classes.label, classes.links)}>Links</span>
          <span className={cn(classes.value, classes.linksValue)}>{keysStats.total}</span>
          <Divider className={cn(classes.divider, classes.divider1)} />
          <span className={cn(classes.label, classes.created)}>Created</span>
          <span className={cn(classes.value, classes.createdValue)}>{getDate(createdAt)}</span>
          <Divider className={cn(classes.divider, classes.divider2)} />
          <span className={cn(classes.label, classes.status)}>Status</span>
          <span className={cn(classes.value, classes.statusValue)}>{status}</span>
        </>
      )}
    </div>
  );
};
