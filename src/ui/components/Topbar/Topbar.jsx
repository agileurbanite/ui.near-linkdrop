import { Link } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';
import { LinearProgress } from '@material-ui/core';
import { Account } from './Account/Account';
import { routes } from '../../../config/routes';
import { useStyles } from './Topbar.styles';

export const Topbar = () => {
  const accountId = useStoreState((store) => store.general.user.wallet.accountId);
  const isLoading = useStoreState((store) => store.general.isLoading);
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <span className={classes.logo}>
          <Link to={routes.campaigns}>NEAR Linkdrop</Link>
        </span>
        <div className={classes.account}>{accountId && <Account accountId={accountId} />}</div>
      </div>
      {isLoading && <LinearProgress className={classes.progress} />}
    </>
  );
};
