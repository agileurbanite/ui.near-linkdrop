import { Typography } from '@material-ui/core';
import { useStoreState } from 'easy-peasy';
import { NoCampaigns } from './NoCampaigns/NoCampaigns';
import { List } from './List/List';
import { useStyles } from './Campaigns.styles';

export const Campaigns = () => {
  const list = useStoreState((store) => store.campaigns.list);
  const map = useStoreState((store) => store.campaigns.map);

  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.topbar}>
          <Typography variant="h3">Campaigns</Typography>
        </div>
        {list.length > 0 ? <List list={list} map={map} /> : <NoCampaigns />}
      </div>
    </>
  );
};
