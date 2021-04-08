import { useStoreState } from 'easy-peasy';
import { LinearProgress } from '@material-ui/core';
import { Account } from './Account/Account';
import { NonConnected } from './NonConnected/NonConnected';
import { useStyles } from './Topbar.styles';

export const Topbar = () => {
  const isConnected = useStoreState((store) => store.general.user.isConnected);
  const isLoading = useStoreState((store) => store.general.isLoading);
  const accountId = useStoreState((store) => store.general.user.accountId);
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <span className={classes.logo}>LOGO</span>
        <div className={classes.account}>
          {isConnected ? <Account accountId={accountId} /> : <NonConnected />}
        </div>
      </div>
      {isLoading && <LinearProgress className={classes.progress} />}
    </>
  );
};
