import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';
import { LinearProgress, IconButton, Box, Toolbar, Typography, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Account } from './Account/Account';
import { routes } from '../../../config/routes';
import { useStyles } from './Topbar.styles';
import logo from '../../images/linkdrop-logo.png';
import { Navigation } from '../Main/Sidebar/Navigation/Navigation';
import { useViewport } from '../../utils/viewport';
import { Sidebar } from '../Main/Sidebar/Sidebar';

export const Topbar = () => {
  const accountId = useStoreState((store) => store.general.user.wallet.accountId);
  const isLoading = useStoreState((store) => store.general.isLoading);
  const classes = useStyles();
  const { isMobileView } = useViewport();
  const [state, setState] = useState({
    menuOpen: false,
  });

  const displayMobile = () => {
    const toggleDrawer = () => {
      setState({
        ...state,
        menuOpen: !state.menuOpen,
      });
    };

    const menuNavigation = (
      <div className={classes.menu}>
        <Sidebar />
      </div>
    );

    return (
      <Toolbar className={classes.toolbar}>
        <IconButton
          onClick={toggleDrawer}
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
        <Typography
          variant="subtitle1"
          component="h2"
          color="inherit"
          style={{ marginLeft: 'auto' }}
        >
          {routes.title}
        </Typography>
        <section className={classes.rightToolbar}>
          <div className={classes.logo}>
            <Link to={routes.campaigns}>
              <div className={classes.logoWrapper}>
                <img src={logo} alt="linkdrop logo (chain links)" />
              </div>
            </Link>
          </div>
        </section>
        <Drawer open={state.menuOpen} onClose={toggleDrawer}>
          <div tabIndex={0} role="button" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
            {menuNavigation}
          </div>
        </Drawer>
      </Toolbar>
    );
  };

  const displayDesktop = () => {
    return (
      <div className={classes.container}>
        <div className={classes.logo}>
          <Link to={routes.campaigns}>
            <div className={classes.logoWrapper}>
              <img src={logo} alt="linkdrop logo (chain links)" />
              NEAR Linkdrop
            </div>
          </Link>
        </div>
        <div className={classes.account}>{accountId && <Account accountId={accountId} />}</div>
      </div>
    );
  };

  return (
    <>
      {isMobileView ? displayMobile() : displayDesktop()}
      {isLoading && <LinearProgress className={classes.progress} />}
    </>
  );
};
