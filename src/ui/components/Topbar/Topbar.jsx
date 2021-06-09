import { Link } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';
import { LinearProgress } from '@material-ui/core';
import { Account } from './Account/Account';
import { routes } from '../../config/routes';
import { appName } from '../../config/appName';
import { useStyles } from './Topbar.styles';

export const Topbar = () => {
  const currentAccount = useStoreState((store) => store.general.user.currentAccount);
  const isLoading = useStoreState((store) => store.general.isLoading);
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <span className={classes.logo}>
          <Link to={routes.campaigns}>{appName}</Link>
        </span>
        <div className={classes.account}>
          {currentAccount && <Account accountId={currentAccount} />}
        </div>
      </div>
      {isLoading && <LinearProgress className={classes.progress} />}
    </>
  );
};
