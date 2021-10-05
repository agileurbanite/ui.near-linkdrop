import { Button } from '@material-ui/core';
import { useStoreActions } from 'easy-peasy';
import { campaignStatus } from '../../../../../../../config/campaignStatus';
import { modals } from '../../../../../../../config/modals';
import { useStyles } from './ResumeAction.styles';

export const ResumeAction = ({ campaign }) => {
  const showModal = useStoreActions((actions) => actions.general.showModal);
  const classes = useStyles();

  const isCreation = campaign.status === campaignStatus.creation;

  const openResumeCreation = () =>
    showModal({ name: modals.resumeCampaignCreation, params: { campaign } });

  return (
    <div className={classes.container}>
      {isCreation ? (
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={openResumeCreation}
        >
          Resume Creation
        </Button>
      ) : (
        <Button variant="outlined" color="secondary" className={classes.button}>
          Resume Deletion
        </Button>
      )}
    </div>
  );
};
