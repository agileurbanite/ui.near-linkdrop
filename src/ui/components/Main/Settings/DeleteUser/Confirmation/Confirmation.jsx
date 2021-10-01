import { Button, CircularProgress, Modal, Paper } from '@material-ui/core';
import { useStoreActions } from 'easy-peasy';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { emoji } from '../../../../../config/emoji';
import { useStyles } from './Confirmation.styles';

export const Confirmation = ({ isOpen, setOpen }) => {
  const [isLoading, setLoading] = useState(false);
  const onDeleteUser = useStoreActions((actions) => actions.general.user.onDeleteUser);
  const classes = useStyles();
  const history = useHistory();

  const onClose = () => !isLoading && setOpen(false);
  const deleteLinkdropUser = () => onDeleteUser({ history, setLoading });

  return (
    <Modal open={isOpen} onClose={onClose} className={classes.modal}>
      <Paper className={classes.container} elevation={5}>
        <span className={classes.emoji}>{emoji.manFrowning}</span>
        <h2 className={classes.header}>Delete Account</h2>
        <p className={classes.description}>
          Are you sure to delete your <br />
          <span>Linkdrop account</span>?
        </p>
        <div className={classes.footer}>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={onClose}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={deleteLinkdropUser}
            className={classes.button}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={16} /> : 'Delete Account'}
          </Button>
        </div>
      </Paper>
    </Modal>
  );
};
