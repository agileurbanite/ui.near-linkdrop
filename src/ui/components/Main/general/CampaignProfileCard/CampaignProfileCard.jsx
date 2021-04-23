import { getTotalAmount } from '../../../../utils/formatCampaignData';
import { useStyles } from './CampaignProfileCard.styles';

export const CampaignProfileCard = ({ campaign: { name, icon, amountPerLink, totalLinks } }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.emojiContainer}>
        <span className={classes.emoji}>{icon}</span>
      </div>
      <span className={classes.name}>{name}</span>
      <span className={classes.balance}>{getTotalAmount(amountPerLink, totalLinks)}</span>
      <div className={classes.links}>{totalLinks} Links</div>
      <span className={classes.linksSubtitle}>Links to generate</span>
    </div>
  );
};
