import { Button, IconButton, Modal, Paper, CircularProgress, Tooltip } from '@material-ui/core';
import { CancelOutlined } from '@material-ui/icons';
import { useStoreActions } from 'easy-peasy';
import { useState } from 'react';
import { formatNearBalance } from '../../../../../../utils/format';
import { useStyles } from './RefundLink.styles';

export const RefundLink = ({ pk, campaignId, tokensPerKey, walletUserId }) => {
  const onRefundLink = useStoreActions((actions) => actions.campaigns.onRefundLink);
  const [isLoading, setLoading] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const classes = useStyles();

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const refundLink = () => {
    onRefundLink({ pk, campaignId, setLoading, onClose });
  };

  return (
    <>
      <IconButton onClick={onOpen} className={classes.button}>
        <Tooltip title="Refund link" placement="top">
          <CancelOutlined className={classes.icon} />
        </Tooltip>
      </IconButton>
      <Modal open={isOpen} onClose={onClose} className={classes.modal}>
        <Paper className={classes.container} elevation={5}>
          <h2 className={classes.header}>Refund Link</h2>
          <p>
            Do you want to deactivate the link and return your funds?
            <br />
          </p>
          <p>
            <span className={classes.bold}>{formatNearBalance(tokensPerKey)}</span>
            &nbsp; will be send to&nbsp;
            <span className={classes.bold}>{walletUserId}</span>
          </p>
          <div className={classes.footer}>
            <Button onClick={onClose}>Cancel</Button>
            <div className={classes.refundContainer}>
              {isLoading ? (
                <CircularProgress size={16} />
              ) : (
                <Button color="primary" onClick={refundLink}>
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
