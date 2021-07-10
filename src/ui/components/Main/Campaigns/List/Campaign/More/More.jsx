import { useStoreActions } from 'easy-peasy';
import { useRef, useState } from 'react';
import { IconButton, Popover } from '@material-ui/core';
import { MoreVertOutlined, GetApp, DeleteOutline } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { MenuItem } from './MenuItem/MenuItem';
import { getRoute } from '../../../../../../config/routes';
import { useStyles } from './More.styles';

export const More = ({ campaignId }) => {
  const onExportCampaignCSV = useStoreActions((actions) => actions.campaigns.onExportCampaignCSV);

  const [isOpen, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const history = useHistory();

  const onOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const onClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const exportCampaignCSV = (e) => {
    onClose(e);
    onExportCampaignCSV({ campaignId });
  };

  const stopPropagation = (e) => e.stopPropagation();
  const goToDeleteCampaign = () => history.push(getRoute.deleteCampaign(campaignId));

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
        transitionDuration={{ appear: 200, enter: 200, exit: 0 }}
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
          <MenuItem
            icon={GetApp}
            classNames={{ icon: classes.exportCsv }}
            text="Export as CSV"
            onClick={exportCampaignCSV}
          />
          <MenuItem
            icon={DeleteOutline}
            classNames={{ icon: classes.deleteCampaign }}
            text="Delete Campaign"
            onClick={goToDeleteCampaign}
          />
        </div>
      </Popover>
    </>
  );
};
