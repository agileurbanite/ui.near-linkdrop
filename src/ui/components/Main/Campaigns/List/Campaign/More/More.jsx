import { useStoreActions } from 'easy-peasy';
import { useRef, useState } from 'react';
import { IconButton, Popover } from '@material-ui/core';
import { MoreVertOutlined, GetApp } from '@material-ui/icons';
import { MenuItem } from './MenuItem/MenuItem';
import { useStyles } from './More.styles';

export const More = ({ campaignId }) => {
  const onExportCampaignCSV = useStoreActions((actions) => actions.campaigns.onExportCampaignCSV);
  const [isOpen, setOpen] = useState(false);
  const buttonRef = useRef(null);

  const onOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const onClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const stopPropagation = (e) => e.stopPropagation();

  const onExportCSV = (event) => {
    onExportCampaignCSV({ event, onClose, campaignId });
  }

  const classes = useStyles();
  return (
    <>
      <IconButton ref={buttonRef} className={classes.button} onClick={onOpen}>
        <MoreVertOutlined />
      </IconButton>
      <Popover
        anchorEl={buttonRef.current}
        classes={{ paper: classes.popover }}
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
        <div
          onClick={stopPropagation}
          onKeyPress={stopPropagation}
          role="button"
          tabIndex={0}
          className={classes.container}
        >
          <MenuItem icon={GetApp} text="Download CSV" onClick={onExportCSV} />
        </div>
      </Popover>
    </>
  );
};
