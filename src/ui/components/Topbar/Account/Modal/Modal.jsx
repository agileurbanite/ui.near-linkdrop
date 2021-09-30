import { Paper, Button } from '@material-ui/core';
import { useStoreActions } from 'easy-peasy';
import { useHistory } from 'react-router';
import { Near } from '../../../general/icons/Near';
import { CopyToClipboard } from '../../../general/CopyToClipboard/CopyToClipboard';
import { OpenInExplorer } from './OpenInExplorer/OpenInExplorer';
import { useStyles } from './Modal.styles';

export const Modal = ({ accountId }) => {
  const onDisconnect = useStoreActions((actions) => actions.general.onDisconnect);
  const history = useHistory();
  const classes = useStyles();

  const disconnect = () => onDisconnect(history);

  return (
    <Paper className={classes.container} elevation={4}>
      <div className={classes.account}>
        <Near className={classes.nearIcon} />
        <span className={classes.accountId}>{accountId}</span>
        <div className={classes.tools}>
          <CopyToClipboard value={accountId} />
          <OpenInExplorer accountId={accountId} />
        </div>
        <div className={classes.footer}>
          <Button variant="outlined" className={classes.disconnect} onClick={disconnect}>
            Disconnect
          </Button>
        </div>
      </div>
    </Paper>
  );
};
