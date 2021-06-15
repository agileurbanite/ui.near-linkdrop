import { useStoreActions, useStoreState } from 'easy-peasy';
import { useHistory } from 'react-router-dom';
import { Button, Modal, Paper } from '@material-ui/core';
import { notifications } from '../../../../config/notifacations';
import { CampaignProfileCard } from '../../general/CampaignProfileCard/CampaignProfileCard';
import { getRoute } from '../../../../config/routes';
import { useStyles } from './SuccessCreationPopup.styles';

// TODO Remove it
export const SuccessCreationPopup = ({ campaignId }) => {
  const campaign = useStoreState((store) => store.campaigns.map[campaignId]);
  const removeNotification = useStoreActions((actions) => actions.general.removeNotification);
  const { push } = useHistory();
  const classes = useStyles();

  const onClose = () => removeNotification(notifications.successCreateCampaign);

  const goToCampaign = () => {
    onClose();
    push(getRoute.campaign(campaignId));
  };

  return (
    <Modal open onClose={onClose} className={classes.modal}>
      <Paper className={classes.container} elevation={5}>
        <h2 className={classes.header}>Campaign Created</h2>
        <CampaignProfileCard campaign={campaign} />
        <div className={classes.footer}>
          <Button onClick={onClose}>Close</Button>
          <Button color="primary" onClick={goToCampaign}>
            View Campaign
          </Button>
        </div>
      </Paper>
    </Modal>
  );
};
