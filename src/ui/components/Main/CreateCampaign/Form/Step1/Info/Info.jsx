import { Near } from '../../../../../general/icons/Near';
import { useStyles } from './Info.styles';

export const Info = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Near className={classes.nearIcon} />
      <span className={classes.walletId}>Wallet ID</span>
      <span className={classes.account}>eclipseeer.near</span>
      <span className={classes.balance}>Balance</span>
      <span className={classes.amount}>1000.00 NEAR</span>
    </div>
  );
};
