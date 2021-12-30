import { useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Button, Modal, Paper } from '@material-ui/core';
import QRCode from 'react-qr-code';
import { useStyles } from './QrModal.styles';
import { ArrowButton } from './ArrowButton/ArrowButton';

export const QrModal = ({ qr }) => {
  const { isOpen, order, link } = qr;
  const onClose = useStoreActions((actions) => actions.campaigns.closeQrModal);
  const total = useStoreState((actions) => actions.campaigns.campaign.pagination.total);
  const onLoadQr = useStoreActions((actions) => actions.campaigns.onLoadQr);
  const [loader, setLoader] = useState(null);
  const classes = useStyles();

  const prev = () => {
    onLoadQr({
      order,
      button: 'prev',
      loader,
      showLoader: () => setLoader('prev'),
      hideLoader: () => setLoader(null),
    });
  };
  const next = () => {
    onLoadQr({
      order,
      button: 'next',
      showLoader: () => setLoader('next'),
      hideLoader: () => setLoader(null),
    });
  };

  return (
    <Modal open={isOpen} onClose={onClose} className={classes.modal}>
      <Paper className={classes.container}>
        <h2 className={classes.header}>
          Link <span>#{order}</span>
        </h2>
        <p className={classes.description}>Scan QR code with your phone</p>
        <ArrowButton
          disabled={order === 1}
          onClick={prev}
          className={classes.arrowBack}
          type="prev"
          loader={loader}
        />

        <div className={classes.qrWrapper}>
          <QRCode value={link} size={500} level="M" />
        </div>
        <ArrowButton
          disabled={total === order}
          onClick={next}
          className={classes.arrowForward}
          type="next"
          loader={loader}
        />

        <div className={classes.buttonWrapper}>
          <Button className={classes.button} onClick={onClose}>
            Close
          </Button>
        </div>
      </Paper>
    </Modal>
  );
};
