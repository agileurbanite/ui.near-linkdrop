import { useStoreActions, useStoreState } from 'easy-peasy';
import { Drawer } from '@material-ui/core';
import { Navigation } from './Navigation/Navigation';
import { useStyles } from './Sidebar.styles';
import { useViewport } from '../../../providers/Viewport';

export const Sidebar = () => {
  const classes = useStyles();
  const isMenuVisible = useStoreState((store) => store.general.isMenuVisible);
  const showMenu = useStoreActions((actions) => actions.general.showMenu);
  const { isMobileView } = useViewport();

  const drawerToggle = () => {
    showMenu(false);
  };

  return (
    <>
      {!isMobileView ? (
        <div className={classes.container}>
          <Navigation />
        </div>
      ) : (
        <Drawer open={isMenuVisible} onClose={drawerToggle}>
          <div tabIndex={0} role="button" onClick={drawerToggle} onKeyDown={drawerToggle}>
            <div className={classes.menu}>
              <Navigation />
            </div>
          </div>
        </Drawer>
      )}
    </>
  );
};
