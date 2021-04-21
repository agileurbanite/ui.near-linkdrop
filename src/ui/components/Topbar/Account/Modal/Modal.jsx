import { Paper } from '@material-ui/core';
import { Near } from '../../../general/icons/Near';
import { CopyToClipboard } from '../../../general/CopyToClipboard/CopyToClipboard';
import { OpenInExplorer } from './OpenInExplorer/OpenInExplorer';
import { useStyles } from './Modal.styles';

export const Modal = ({ accountId }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.container} elevation={4}>
      <div className={classes.account}>
        <Near className={classes.nearIcon} />
        <span className={classes.accountId}>{accountId}</span>
        <div className={classes.tools}>
          <CopyToClipboard value={accountId} />
          <OpenInExplorer accountId={accountId} />
        </div>
      </div>
    </Paper>
  );
};
