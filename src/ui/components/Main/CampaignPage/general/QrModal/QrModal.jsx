import { useStoreActions } from 'easy-peasy';
import { Button, Modal, Paper } from '@material-ui/core';
import QRCode from 'react-qr-code';
import { useStyles } from './QrModal.styles';
import { ArrowButton } from './ArrowButton/ArrowButton';

export const QrModal = ({ qr, keys }) => {
  const { isOpen, order, link } = qr;
  const onClose = useStoreActions((actions) => actions.campaigns.closeQrModal);
  const nextLink = useStoreActions((actions) => actions.campaigns.openNextLink);
  const prevLink = useStoreActions((actions) => actions.campaigns.openPrevLink);
  const classes = useStyles();

  const isActiveKey = (button) => {
    return keys.find((key) => {
      const nextKey = button === 'prev' ? key.order < order : key.order > order;
      return key.status === 'Active' && nextKey
    });
  };

  const prev = () => {
    prevLink({ order });
  };
  const next = () => {
    nextLink({ order });
  };

  return (
    <Modal open={isOpen} onClose={onClose} className={classes.modal}>
      <Paper className={classes.container}>
        <h2 className={classes.header}>
          Link <span>#{order}</span>
        </h2>
        <p className={classes.description}>Scan QR code with your phone</p>
        <ArrowButton
          disabled={!isActiveKey('prev')}
          onClick={prev}
          className={classes.arrowBack}
          type="prev"
        />

        <div className={classes.qrWrapper}>
          <QRCode value={link} size={500} level="M" />
        </div>
        <ArrowButton
          disabled={!isActiveKey('next')}
          onClick={next}
          className={classes.arrowForward}
          type="next"
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
