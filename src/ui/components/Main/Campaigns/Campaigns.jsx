import { Button, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useStoreState } from 'easy-peasy';
import { Link } from 'react-router-dom';
import { routes } from '../../../../config/routes';
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
          <Link to={routes.createCampaign}>
            <Button variant="contained" color="primary" className={classes.createCampaign}>
              <Add className={classes.addIcon} />
              New Campaign
            </Button>
          </Link>
        </div>
        {list.length > 0 ? <List list={list} map={map} /> : <NoCampaigns />}
      </div>
      {deleteCampaign && <DeleteCampaign params={deleteCampaign} />}
    </>
  );
};
