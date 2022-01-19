import { useStyles } from './CampaignIcon.styles';

export const CampaignIcon = ({ campaign }) => {
  const classes = useStyles();
  const Icon = campaign.type.icon;

  return (
    <div className={classes.container}>
      <Icon className={classes.icon} />
    </div>
  );
};
