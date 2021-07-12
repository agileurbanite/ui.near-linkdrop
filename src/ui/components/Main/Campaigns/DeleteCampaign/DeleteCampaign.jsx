import { Modal, Paper } from '@material-ui/core';
import { useStoreActions } from 'easy-peasy';
import { useState } from 'react';
import { getCampaignName } from '../../../../utils/formatCampaignData';
import { Start } from './Start/Start';
import { Progress } from './Progress/Progress';
import { Finish } from './Finish/Finish';
import { useStyles } from './DeleteCampaign.styles';

export const DeleteCampaign = ({ params: { campaignId } }) => {
  const hideModal = useStoreActions((actions) => actions.general.hideModal);
  const [step, setStep] = useState(1);
  const classes = useStyles();

  const campaignName = getCampaignName(campaignId);

  const onStartDeleting = () => setStep(2);
  const onFinishDeleting = () => setStep(3);
  const closeModal = () => hideModal({ name: 'deleteCampaign' });

  return (
    <Modal open onClose={closeModal} className={classes.modal}>
      <Paper className={classes.container} elevation={3}>
        {step === 1 && <Start onStartDeleting={onStartDeleting} campaignName={campaignName} />}
        {step === 2 && <Progress campaignId={campaignId} onFinishDeleting={onFinishDeleting} />}
        {step === 3 && <Finish closeModal={closeModal} />}
      </Paper>
    </Modal>
  );
};
