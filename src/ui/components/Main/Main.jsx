import { Route, Switch } from 'react-router-dom';
import { Sidebar } from './Sidebar/Sidebar';
import { Campaigns } from './Campaigns/Campaigns';
import { routes } from '../../config/routes';
import { useStyles } from './Main.styles';

export const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Sidebar />
      <Switch>
        <Route exact path={routes.campaigns} component={Campaigns} />
      </Switch>
    </div>
  );
}
