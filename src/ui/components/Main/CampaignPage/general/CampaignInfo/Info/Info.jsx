import { useStyles } from './Info.styles';
import { getTime } from '../../../../../../utils/formatCampaignData';
import { formatNearBalance } from '../../../../../../utils/format';

export const Info = ({
  campaign: { status, cratedAt, keysStats, tokensPerKey, balance, redirect },
}) => {
  const classes = useStyles({ status });

  return (
    <div>
      <div className={classes.section}>
        <div className={classes.label}>Status</div>
        <div className={classes.status}>{status}</div>
      </div>
      <div className={classes.section}>
        <span className={classes.label}>Crated at</span>
        <span className={classes.value}>{getTime(cratedAt)}</span>
      </div>
      <div className={classes.section}>
        <span className={classes.label}>Campaign balance</span>
        <span className={classes.value}>{formatNearBalance(balance.total)}</span>
      </div>
      <div className={classes.section}>
        <span className={classes.label}>Total drops</span>
        <span className={classes.value}>{keysStats.total}</span>
      </div>
      <div className={classes.section}>
        <span className={classes.label}>Each drop contains</span>
        <span className={classes.value}>{formatNearBalance(tokensPerKey)}</span>
      </div>
      {redirect && (
        <div className={classes.section}>
          <span className={classes.label}>Redirect url</span>
          <span className={classes.value}>https://www.figma.com</span>
        </div>
      )}
    </div>
  );
};
