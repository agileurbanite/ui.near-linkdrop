import { AdditionalData } from './AdditionalData/AdditionalData';
import { getTotalAmount } from '../../../../utils/formatCampaignData';
import { useStyles } from './Profile.styles';

export const Profile = ({ campaign }) => {
  const classes = useStyles();

  const { name, icon, totalLinks, amountPerLink } = campaign;
  return (
    <div className={classes.container}>
      <div className={classes.emojiContainer}>
        <span className={classes.emoji}>{icon}</span>
      </div>
      <span className={classes.name}>{name}</span>
      <span className={classes.balance}>{getTotalAmount(amountPerLink, totalLinks)}</span>
      <div className={classes.links}>{totalLinks} Links</div>
      <span className={classes.linksSubtitle}>Links to generate</span>
      <AdditionalData campaign={campaign} />
    </div>
  );
};
