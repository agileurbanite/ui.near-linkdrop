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
import { ViewportProvider } from '../utils/viewport';

export const App = () => (
  <ViewportProvider>
    <Caution />
    <Topbar />
    <Switch>
      <Route exact path={routes.connectWallet} component={ConnectWallet} title="ConnectWallet" />
      <Route exact path={routes.createAccount} component={CreateAccount} title="CreateAccount" />
      <Route exact path={routes.restoreAccess} component={RestoreAccess} title="restoreAccess" />
      <Route
        exact
        path={[routes.campaigns, routes.settings, routes.createCampaign, routes.campaign]}
        component={Main}
        title="NEAR Linkdrop"
      />
      <Route path="*" component={PageNotFound} title="PageNotFound" />
    </Switch>
    <Error />
  </ViewportProvider>
);
