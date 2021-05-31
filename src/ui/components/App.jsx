import { Switch, Route } from 'react-router-dom';
import { Topbar } from './Topbar/Topbar';
import { Caution } from './Caution/Caution';
import { ConnectWallet } from './ConnectWallet/ConnectWallet';
import { CreateAccount } from './CreateAccount/CreateAccount';
import { Main } from './Main/Main';
import { PageNotFound } from './PageNotFound/PageNotFound';
import { Error } from './Error/Error';
import { routes } from '../config/routes';

export const App = () => (
  <>
    <Caution />
    <Topbar />
    <Switch>
      <Route exact path={routes.connectWallet} component={ConnectWallet} />
      <Route exact path={routes.createAccount} component={CreateAccount} />
      <Route
        exact
        path={[routes.campaigns, routes.campaign, routes.createCampaign]}
        component={Main}
      />
      <Route path="*" component={PageNotFound} />
    </Switch>
    <Error />
  </>
);
