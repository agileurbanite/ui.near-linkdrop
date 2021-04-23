import { formatNearBalance } from '../../../../../../utils/format';
import { Near } from '../../../../../general/icons/Near';
import { useStyles } from './Info.styles';

export const Info = ({ accountId, balance }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Near className={classes.nearIcon} />
      <span className={classes.walletId}>Wallet ID</span>
      <span className={classes.account}>{accountId}</span>
      <span className={classes.balance}>Balance</span>
      <span className={classes.amount}>{formatNearBalance(balance)}</span>
    </div>
  );
};
