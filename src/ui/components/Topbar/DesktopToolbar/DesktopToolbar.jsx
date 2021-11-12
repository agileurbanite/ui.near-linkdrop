import { useStoreState } from 'easy-peasy';
import logo from '../../../images/linkdrop-logo.png';
import { useStyles } from './DesktopToolbar.styles';
import { Account } from '../Account/Account';

export const DesktopToolbar = () => {
  const accountId = useStoreState((store) => store.general.user.wallet.accountId);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <div className={classes.logoWrapper}>
          <img src={logo} alt="linkdrop logo (chain links)" />
          NEARDROP
        </div>
      </div>
      <div className={classes.account}>{accountId && <Account accountId={accountId} />}</div>
    </div>
  );
};
