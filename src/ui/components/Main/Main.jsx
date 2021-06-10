import { Route, Switch } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';
import { Campaigns } from './Campaigns/Campaigns';
import { Settings } from './Settings/Settings';
import { CreateCampaign } from './CreateCampaign/CreateCampaign';
import { CompleteCampaignCreation } from './CompleteCampaignCreation/CompleteCampaignCreation';
import { Campaign } from './Campaign/Campaign';
import { routes } from '../../config/routes';
import { useStyles } from './Main.styles';

export const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Sidebar />
      <div className={classes.pages}>
        <div className={classes.pagesWrapper}>
          <Switch>
            <Route exact path={routes.campaigns} component={Campaigns} />
            <Route exact path={routes.settings} component={Settings} />
            <Route exact path={routes.createCampaign} component={CreateCampaign} />
            <Route
              exact
              path={routes.completeCampaignCreation}
              component={CompleteCampaignCreation}
            />
            <Route exact path={routes.campaign} component={Campaign} />
          </Switch>
        </div>
      </div>
      <Footer classNames={{ container: classes.footer }} />
    </div>
  );
};
