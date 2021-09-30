import { Button, IconButton, Popover, Paper, Tooltip } from '@material-ui/core';
import QRCode from 'react-qr-code';
import { useRef, useState } from 'react';
import { Qr as QrIcon } from '../../../../../general/icons/Qr';
import { useStyles } from './Qr.styles';

export const Qr = ({ link }) => {
  const [isOpen, setOpen] = useState(false);
  const classes = useStyles();
  const buttonRef = useRef(null);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <IconButton onClick={onOpen} className={classes.button} ref={buttonRef}>
        <Tooltip title="Share via QR" placement="top">
          <QrIcon className={classes.icon} />
        </Tooltip>
      </IconButton>
      <Popover
        anchorEl={buttonRef.current}
        open={isOpen}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Paper className={classes.container} elevation={5}>
          <h2 className={classes.header}>Scan Me</h2>
          <p className={classes.description}>Hold the camera on the picture</p>
          <div className={classes.qrWrapper}>
            <QRCode value={link} size={230} level="M" />
          </div>
          <div className={classes.footer}>
            <Button onClick={onClose} className={classes.close}>
              Close
            </Button>
          </div>
        </Paper>
      </Popover>
    </>
  );
};
