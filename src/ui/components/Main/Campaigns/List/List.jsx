import { Campaign } from './Campaign/Campaign';
import { useStyles } from './List.styles';

export const List = ({ list, map }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {list.map((campaignId) => (
        <Campaign key={campaignId} campaign={map[campaignId]} />
      ))}
    </div>
  );
};
