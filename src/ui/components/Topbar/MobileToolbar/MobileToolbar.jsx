import { useStoreActions, useStoreState } from 'easy-peasy';
import { Link } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Toolbar } from '@material-ui/core';
import { useStyles } from './MobileToolbar.styles';
import { routes } from '../../../../config/routes';
import logo from '../../../images/linkdrop-logo.png';

const { campaigns, settings, createCampaign, campaign } = routes;

export const MobileToolbar = () => {
  const classes = useStyles();
  const isMenuVisible = useStoreState((store) => store.general.isMenuVisible);
  const showMenu = useStoreActions((actions) => actions.general.showMenu);
  const location = useLocation();

  const match = matchPath(location.pathname, {
    path: [campaigns, campaign, createCampaign, settings],
    exact: true,
  });

  const buttonToggle = () => {
    showMenu(!isMenuVisible);
  };

  return (
    <Toolbar className={classes.toolbar}>
      {match && (
        <IconButton onClick={buttonToggle} className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
      )}
      <section className={classes.rightToolbar}>
        <div className={classes.logo}>
          <Link to={routes.campaigns}>
            <div className={classes.logoWrapper}>
              <img src={logo} alt="linkdrop logo (chain links)" />
            </div>
          </Link>
        </div>
      </section>
    </Toolbar>
  );
};
