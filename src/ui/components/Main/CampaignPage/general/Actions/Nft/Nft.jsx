import { useRef, useState } from 'react';
import { IconButton, Tooltip, Button, Paper, Modal } from '@material-ui/core';
import { useStyles } from './Nft.styles';
import { NftIcon } from '../../../../../general/icons/NftIcon';

export const Nft = ({ order }) => {
  const [isOpen, setOpen] = useState(false);
  const classes = useStyles();
  const buttonRef = useRef(null);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <IconButton onClick={onOpen} ref={buttonRef} className={classes.nftButton}>
        <Tooltip title="Show NFT" placement="top" classes={{ tooltip: classes.tooltip }}>
          <NftIcon className={classes.icon} />
        </Tooltip>
      </IconButton>
      <Modal open={isOpen} onClose={onClose} className={classes.modal}>
        <Paper className={classes.container}>
          <h2 className={classes.header}>
            Link <span>#{order}</span>
          </h2>
          <div className={classes.nftWrapper}>
            <img
              className={classes.nft}
              alt="#"
              src="https://m.media-amazon.com/images/M/MV5BMmJlYmZkNmUtYmU5ZC00MTFiLTlkY2MtMzI2ODFkY2ZkNDQ2XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg"
            />
          </div>
          <div className={classes.buttonWrapper}>
            <Button className={classes.button} onClick={onClose}>
              Close
            </Button>
          </div>
        </Paper>
      </Modal>
    </>
  );
};
