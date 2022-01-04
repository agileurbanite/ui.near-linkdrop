import { useStoreState } from 'easy-peasy';
import { useStyles } from './Near.styles';
import { Topbar } from '../general/Topbar/Topbar';
import { CampaignInfo } from '../general/CampaignInfo/CampaignInfo';
import { Links } from '../general/Links/Links';
import { DeleteCampaign } from '../../Campaigns/DeleteCampaign/DeleteCampaign';
import { ResumeCampaignDeletion } from '../../Campaigns/ResumeCampaignDeletion/ResumeCampaignDeletion';

export const Near = ({ campaign, type }) => {
  const classes = useStyles();
  const deleteCampaign = useStoreState((state) => state.general.modals.deleteCampaign);

  return (
    <div className={classes.container}>
      <Topbar campaign={campaign} />
      <div className={classes.body}>
        <CampaignInfo campaign={campaign} type={type} />
        <Links campaign={campaign} />
      </div>
      {deleteCampaign && <DeleteCampaign params={deleteCampaign} />}
      <ResumeCampaignDeletion />
    </div>
  );
};
