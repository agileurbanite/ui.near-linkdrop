import { useStyles } from './CampaignProfileCard.styles';

export const CampaignProfileCard = ({ campaign }) => {
  const classes = useStyles();

  const { name, icon, totalInKeys, totalKeys } = campaign;

  return (
    <div className={classes.container}>
      <div className={classes.emojiContainer}>
        <span className={classes.emoji}>{icon}</span>
      </div>
      <span className={classes.name}>{name}</span>
      <span className={classes.balance}>{totalInKeys}</span>
      <div className={classes.links}>{totalKeys} Links</div>
      <span className={classes.linksSubtitle}>Links to generate</span>
    </div>
  );
};
