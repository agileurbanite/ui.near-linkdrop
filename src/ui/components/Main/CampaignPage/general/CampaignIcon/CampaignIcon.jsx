import { useStyles } from './CampaignIcon.styles';
import { NearIcon } from '../../../../general/icons/NearIcon';
import { NftIcon } from '../../../../general/icons/NftIcon';

const icons = {
  near: NearIcon,
  nft: NftIcon,
};

export const CampaignIcon = ({ campaign: { type } }) => {
  const classes = useStyles();

  const Icon = icons[type];

  return (
    <div className={classes.container}>
      <Icon className={classes.icon} />
    </div>
  );
};
