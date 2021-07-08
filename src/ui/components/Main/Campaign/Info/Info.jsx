import { getTotalAmount, getCampaignName } from '../../../../utils/formatCampaignData';
import { useStyles } from './Info.styles';

export const Info = ({ campaign: { campaignId, icon, tokensPerKey, keysStats } }) => {
  const classes = useStyles();

  const { active } = keysStats;

  return (
    <div className={classes.container}>
      <div className={classes.emojiContainer}>
        <span className={classes.emoji}>{icon}</span>
      </div>
      <span className={classes.name}>{getCampaignName(campaignId)}</span>
      <span className={classes.balance}>{getTotalAmount(tokensPerKey, active)}</span>
      <div className={classes.links}>{`${active} Links`}</div>
    </div>
  );
};
