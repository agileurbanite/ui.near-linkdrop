import { useStoreActions, useStoreState } from 'easy-peasy';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Toolbar } from '@material-ui/core';
import { useStyles } from './MobileToolbar.styles';
import { routes } from '../../../../config/routes';
import logo from '../../../images/linkdrop-logo.png';

export const MobileToolbar = () => {
  const classes = useStyles();
  const isMenuVisible = useStoreState((store) => store.general.isMenuVisible);
  const showMenu = useStoreActions((actions) => actions.general.showMenu);
  const location = useLocation();

  const showMenuByLocation =
    ['/campaigns', '/settings', '/create-campaign'].filter(
      (path) => location.pathname.match(path) !== null,
    ).length > 0;

  const buttonToggle = () => {
    showMenu(!isMenuVisible);
  };

  return (
    <Toolbar className={classes.toolbar}>
      {showMenuByLocation && (
        <IconButton
          onClick={buttonToggle}
          className={classes.menuButton}
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
          }}
        >
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
