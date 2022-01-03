import { useRef } from 'react';
import { useStoreActions } from 'easy-peasy';
import { IconButton, Tooltip } from '@material-ui/core';
import { useStyles } from './Qr.styles';
import { Qr as QrIcon } from '../../../../../general/icons/Qr';

export const Qr = ({ order, sk, campaignId }) => {
  const openModal = useStoreActions((actions) => actions.campaigns.openQrModal);
  const classes = useStyles();
  const buttonRef = useRef(null);

  const onOpen = () => {
    openModal({ order, sk, campaignId });
  };

  return (
    <IconButton onClick={onOpen} ref={buttonRef}>
      <Tooltip title="Share via QR" placement="top" classes={{ tooltip: classes.tooltip }}>
        <QrIcon className={classes.icon} />
      </Tooltip>
    </IconButton>
  );
};
