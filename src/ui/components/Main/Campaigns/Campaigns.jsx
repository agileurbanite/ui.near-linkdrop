import { Typography } from '@material-ui/core';
import { useStoreState } from 'easy-peasy';
import { DeleteCampaign } from './DeleteCampaign/DeleteCampaign';
import { NoCampaigns } from './NoCampaigns/NoCampaigns';
import { List } from './List/List';
import { useStyles } from './Campaigns.styles';

export const Campaigns = () => {
  const list = useStoreState((state) => state.campaigns.list);
  const map = useStoreState((state) => state.campaigns.map);
  const deleteCampaign = useStoreState((state) => state.general.modals.deleteCampaign);
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.topbar}>
          <Typography variant="h3">Campaigns</Typography>
        </div>
        {list.length > 0 ? <List list={list} map={map} /> : <NoCampaigns />}
      </div>
      {deleteCampaign && <DeleteCampaign params={deleteCampaign} />}
    </>
  );
};
