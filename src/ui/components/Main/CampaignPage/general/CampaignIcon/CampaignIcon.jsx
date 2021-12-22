import { useStyles } from './CampaignIcon.styles';
import { NearIcon } from '../../../../general/icons/NearIcon';
import { NftIcon } from '../../../../general/icons/NftIcon';

export const CampaignIcon = ({ campaign: { type } }) => {
  const classes = useStyles();

  const iconType = {
    near: NearIcon(classes.icon),
    nft: NftIcon(classes.icon),
  };
  const icon = iconType[type];

  return <div className={classes.container}>{icon}</div>;
};
