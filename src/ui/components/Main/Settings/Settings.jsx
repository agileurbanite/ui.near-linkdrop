import { Typography, Button } from '@material-ui/core';
import { useStoreActions } from 'easy-peasy';
import { useHistory } from 'react-router-dom';
import { useStyles } from './Settings.styles';

export const Settings = () => {
  const onDeleteLinkdropUser = useStoreActions(
    (actions) => actions.general.user.onDeleteLinkdropUser,
  );
  const history = useHistory();
  const classes = useStyles();

  const deleteLinkdropUser = () => onDeleteLinkdropUser({ history });

  return (
    <div className={classes.container}>
      <div className={classes.topbar}>
        <Typography variant="h3">Settings</Typography>
      </div>
      <div className={classes.content}>
        <Button variant="contained" onClick={deleteLinkdropUser}>
          Delete Linkdrop Account
        </Button>
      </div>
    </div>
  );
};
