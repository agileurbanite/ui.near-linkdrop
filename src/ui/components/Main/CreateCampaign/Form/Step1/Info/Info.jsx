import { useStoreState } from 'easy-peasy';
import { formatNearBalance } from '../../../../../../utils/format';
import { Near } from '../../../../../general/icons/Near';
import { useStyles } from './Info.styles';

export const Info = () => {
  const balance = useStoreState((store) => store.general.user.balance);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Near className={classes.nearIcon} />
      <span className={classes.walletId}>Wallet ID</span>
      <span className={classes.account}>eclipseeer.near</span>
      <span className={classes.balance}>Balance</span>
      <span className={classes.amount}>{formatNearBalance(balance)}</span>
    </div>
  );
};
