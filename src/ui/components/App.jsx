import { Switch, Route } from 'react-router-dom';
import { Topbar } from './Topbar/Topbar';
import { ConnectWallet } from './ConnectWallet/ConnectWallet';
import { Main } from './Main/Main';
import { PageNotFound } from './PageNotFound/PageNotFound';
import { Error } from './Error/Error';
import { routes } from '../config/routes';

export const App = () => (
  <>
    <Topbar />
    <Switch>
      <Route exact path={routes.connectWallet} component={ConnectWallet} />
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
