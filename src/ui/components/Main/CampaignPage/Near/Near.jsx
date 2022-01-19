import { useStoreState } from 'easy-peasy';
import { useStyles } from './Near.styles';
import { Topbar } from '../general/Topbar/Topbar';
import { CampaignInfo } from '../general/CampaignInfo/CampaignInfo';
import { Links } from '../general/Links/Links';
import { Link } from './Link/Link';
import { DeleteCampaign } from '../general/DeleteCampaign/DeleteCampaign';

export const Near = ({ campaign }) => {
  const classes = useStyles();
  const deleteCampaign = useStoreState((state) => state.general.modals.deleteCampaign);

  return (
    <div className={classes.container}>
      <Topbar campaign={campaign} />
      <div className={classes.body}>
        <CampaignInfo campaign={campaign} />
        <Links campaign={campaign} Link={Link} />
      </div>
      {deleteCampaign && <DeleteCampaign params={deleteCampaign} campaignType={campaign.type} />}
    </div>
  );
};
