import { Switch, Route } from 'react-router-dom';
import { Topbar } from './Topbar/Topbar';
import { Caution } from './Caution/Caution';
import { ConnectWallet } from './ConnectWallet/ConnectWallet';
import { CreateAccount } from './CreateAccount/CreateAccount';
import { RestoreAccess } from './RestoreAccess/RestoreAccess';
import { Main } from './Main/Main';
import { PageNotFound } from './PageNotFound/PageNotFound';
import { Error } from './Error/Error';
import { routes } from '../../config/routes';

export const App = () => (
  <>
    <Caution />
    <Topbar />
    <Switch>
      <Route exact path={routes.connectWallet} component={ConnectWallet} />
      <Route exact path={routes.createAccount} component={CreateAccount} />
      <Route exact path={routes.restoreAccess} component={RestoreAccess} />
      <Route
        exact
        path={[routes.campaigns, routes.settings, routes.createCampaign, routes.campaign]}
        component={Main}
      />
      <Route path="*" component={PageNotFound} title="PageNotFound" />
    </Switch>
    <Error />
  </>
);
