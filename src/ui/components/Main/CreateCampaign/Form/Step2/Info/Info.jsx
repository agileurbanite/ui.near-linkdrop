import { Near } from '../../../../../general/icons/Near';
import { formatNearBalance } from '../../../../../../utils/format';
import { useStyles } from './Info.styles';

export const Info = ({ accountId, balance, campaignData }) => {
  const classes = useStyles();
  const { amountPerLink, totalInLinks, serviceFee, total } = campaignData;

  return (
    <div className={classes.info}>
      <div className={classes.accountBlock}>
        <Near className={classes.nearIcon} />
        <span className={classes.walletId}>Wallet ID</span>
        <span className={classes.account}>{accountId}</span>
      </div>
      <div className={classes.balanceBlock}>
        <span className={classes.balance}>Balance</span>
        <span className={classes.amount}>{formatNearBalance(balance)}</span>
      </div>

      <div className={classes.totalValueContainer}>
        <div className={classes.label}>
          <span className={classes.labelDescription}>Each link contains</span>
          <span className={classes.labelValue}>{formatNearBalance(amountPerLink, 5)}</span>
        </div>
        <div className={classes.label}>
          <span className={classes.labelDescription}>Total NEAR in links</span>
          <span className={classes.labelValue}>{formatNearBalance(totalInLinks, 5)}</span>
        </div>
        <div className={classes.label}>
          <span className={classes.labelDescription}>Service fee</span>
          <span className={classes.labelValue}>~{formatNearBalance(serviceFee)}</span>
        </div>
      </div>
      <div className={classes.label}>
        <span className={classes.total}>Total - spend</span>
        <span className={classes.total}>~{formatNearBalance(total, 5)}</span>
      </div>
    </div>
  );
};
