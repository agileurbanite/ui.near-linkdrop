import { useStoreState } from 'easy-peasy';
import { LinearProgress } from '@material-ui/core';
import { useStyles } from './Topbar.styles';
import { useViewport } from '../../utils/viewport';
import { MobileToolbar } from './mobile/MobileToolbar';
import { DesktopToolbar } from './desktop/DesktopToolbar';

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
