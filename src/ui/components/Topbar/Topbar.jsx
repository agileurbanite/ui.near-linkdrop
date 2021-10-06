import { Link } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';
import { LinearProgress } from '@material-ui/core';
import { Account } from './Account/Account';
import { routes } from '../../../config/routes';
import { useStyles } from './Topbar.styles';
import logo from '../../images/linkdrop-logo.png';

export const Topbar = () => {
  const accountId = useStoreState((store) => store.general.user.wallet.accountId);
  const isLoading = useStoreState((store) => store.general.isLoading);
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.logo}>
          <Link to={routes.campaigns}>
            <div className={classes.logoWrapper}>
              <img src={logo} alt="linkdrop logo (chain links)" />
              NEAR Linkdrop
            </div>
          </Link>
        </div>
        <div className={classes.account}>{accountId && <Account accountId={accountId} />}</div>
      </div>
      {isLoading && <LinearProgress className={classes.progress} />}
    </>
  );
};
