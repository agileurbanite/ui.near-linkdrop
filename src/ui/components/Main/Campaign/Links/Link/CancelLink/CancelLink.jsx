import { Button, IconButton, Modal, Paper, CircularProgress } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import { useStoreActions } from 'easy-peasy';
import { useState } from 'react';
import { getRefundAmount } from './getRefundAmount';
import { useStyles } from './CancelLink.styles';

export const CancelLink = ({ secretKey, amountPerLink }) => {
  const onCancelLink = useStoreActions((actions) => actions.campaigns.onCancelLink);
  const [isLoading, setLoading] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const classes = useStyles();

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const cancelLink = () => onCancelLink({ secretKey, onClose, setLoading });

  return (
    <>
      <IconButton onClick={onOpen} className={classes.button}>
        <Cancel />
      </IconButton>
      <Modal open={isOpen} onClose={onClose} className={classes.modal}>
        <Paper className={classes.container} elevation={5}>
          <h2 className={classes.header}>Refund Link</h2>
          <p>
            Do you want to cancel the link and return your funds?
            <br />
            <br />
            Notice that only&nbsp;
            <span className={classes.amount}>~{getRefundAmount(amountPerLink)}</span>
            &nbsp; will be returned to your account.
          </p>
          <div className={classes.footer}>
            <Button onClick={onClose}>Cancel</Button>
            <div className={classes.refundContainer}>
              {isLoading ? (
                <CircularProgress size={16} />
              ) : (
                <Button color="primary" onClick={cancelLink}>
                  Refund Link
                </Button>
              )}
            </div>
          </div>
        </Paper>
      </Modal>
    </>
  );
};
