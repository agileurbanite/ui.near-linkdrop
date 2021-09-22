import { Link } from 'react-router-dom';
import { Button, Divider } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Navigation } from './Navigation/Navigation';
import { routes } from '../../../../config/routes';
import { useStyles } from './Sidebar.styles';

export const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Link to={routes.createCampaign}>
        <Button variant="contained" color="primary" className={classes.createCampaign}>
          <Add className={classes.addIcon} />
          New Campaign
        </Button>
      </Link>
      <Divider className={classes.divider} />
      <Navigation />
    </div>
  );
};
