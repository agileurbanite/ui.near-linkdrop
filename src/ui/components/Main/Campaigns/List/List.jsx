import { Campaign } from './Campaign/Campaign';
import { useStyles } from './List.styles';

export const List = ({ list, map }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {list
          .map((campaignId) => <Campaign key={campaignId} campaign={map[campaignId]} />)
          .reverse()}
      </div>
    </div>
  );
};
