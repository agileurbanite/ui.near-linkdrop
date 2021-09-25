import { Near } from '../../../../../general/icons/Near';
import { formatNearBalance } from '../../../../../../utils/format';
import { useStyles } from './Info.styles';

export const Info = ({ accountId, balance, campaignData }) => {
  const classes = useStyles();
  const { amountPerKey, totalInKeys, operationReserve, totalPrice } = campaignData;

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
          <span className={classes.labelValue}>{amountPerKey} NEAR</span>
        </div>
        <div className={classes.label}>
          <span className={classes.labelDescription}>Total NEAR in links</span>
          <span className={classes.labelValue}>{totalInKeys} NEAR</span>
        </div>
        <div className={classes.label}>
          <span className={classes.labelDescription}>
            Operation reserve (gas price, campaign storage etc)
          </span>
          <span className={classes.labelValue}>~{operationReserve} NEAR</span>
        </div>
      </div>
      <div className={classes.label}>
        <span className={classes.total}>Total - spend</span>
        <span className={classes.total}>~{totalPrice} NEAR</span>
      </div>
    </div>
  );
};
