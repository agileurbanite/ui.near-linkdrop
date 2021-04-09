import { Route, Switch } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';
import { Campaigns } from './Campaigns/Campaigns';
import { CreateCampaign } from './CreateCampaign/CreateCampaign';
import { routes } from '../../config/routes';
import { useStyles } from './Main.styles';

const Settings = () => <div>Settings</div>;

export const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Sidebar />
      <div className={classes.pages}>
        <div className={classes.pagesWrapper}>
          <Switch>
            <Route exact path={routes.campaigns} component={Campaigns} />
            <Route exact path={routes.createCampaign} component={CreateCampaign} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </div>
      </div>
      <Footer classNames={{ container: classes.footer }} />
    </div>
  );
};
