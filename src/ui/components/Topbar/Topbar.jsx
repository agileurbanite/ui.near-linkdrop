import { useStoreState } from 'easy-peasy';
import { LinearProgress } from '@material-ui/core';
import { useStyles } from './Topbar.styles';
import { useViewport } from '../../providers/Viewport';
import { MobileToolbar } from './MobileToolbar/MobileToolbar';
import { DesktopToolbar } from './DesktopToolbar/DesktopToolbar';

export const Topbar = () => {
  const isLoading = useStoreState((store) => store.general.isLoading);
  const classes = useStyles();
  const { isMobileView } = useViewport();

  return (
    <>
      {isMobileView ? <MobileToolbar /> : <DesktopToolbar />}
      {isLoading && <LinearProgress className={classes.progress} />}
    </>
  );
};
