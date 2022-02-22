import { Button, Modal, Paper } from '@material-ui/core';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import { useViewport } from '../../../../../providers/Viewport';
import { ArrowButton } from './ArrowButton/ArrowButton';
import { useStyles } from './QrModal.styles';

export const QrModal = ({ qr }) => {
  const { isOpen, order, link } = qr;
  const closeQrModal = useStoreActions((actions) => actions.campaigns.closeQrModal);
  const total = useStoreState((actions) => actions.campaigns.campaign.pagination.total);
  const onLoadNextQr = useStoreActions((actions) => actions.campaigns.onLoadNextQr);
  const onLoadPrevQr = useStoreActions((actions) => actions.campaigns.onLoadPrevQr);
  const [loader, setLoader] = useState(null);
  const classes = useStyles();
  const { isMobileView } = useViewport();

  const prev = () => {
    onLoadPrevQr({
      order,
      showLoader: () => setLoader('prev'),
      hideLoader: () => setLoader(null),
    });
  };

  const next = () => {
    onLoadNextQr({
      order,
      showLoader: () => setLoader('next'),
      hideLoader: () => setLoader(null),
    });
  };

  const closeModal = () => closeQrModal();

  return (
    <Modal open={isOpen} onClose={closeModal} className={classes.modal}>
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
          <QRCode value={link} size={isMobileView ? 250 : 405} level="M" />
        </div>
        <ArrowButton
          disabled={total === order}
          onClick={next}
          className={classes.arrowForward}
          type="next"
          loader={loader}
        />

        <div className={classes.buttonWrapper}>
          <Button className={classes.button} onClick={closeModal}>
            Close
          </Button>
        </div>
      </Paper>
    </Modal>
  );
};
