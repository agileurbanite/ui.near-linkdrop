import { getTotalAmount, getCampaignName } from '../../../../utils/formatCampaignData';
import { useStyles } from './CampaignProfileCard.styles';

export const CampaignProfileCard = ({ campaign: { campaignId, icon, tokensPerKey, keysStats } }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.emojiContainer}>
        <span className={classes.emoji}>{icon}</span>
      </div>
      <span className={classes.name}>{getCampaignName(campaignId)}</span>
      <span className={classes.balance}>{getTotalAmount(tokensPerKey, keysStats.total)}</span>
      <div className={classes.links}>{keysStats.total} Links</div>
      <span className={classes.linksSubtitle}>Links to generate</span>
    </div>
  );
};
