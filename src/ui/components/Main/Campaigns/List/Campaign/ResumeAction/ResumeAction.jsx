import { Button } from '@material-ui/core';
import { campaignStatus } from '../../../../../../../config/campaignStatus';
import { useStyles } from './ResumeAction.styles';

export const ResumeAction = ({ campaign }) => {
  const classes = useStyles();

  const isCreation = campaign.status === campaignStatus.creation;

  return (
    <div className={classes.container}>
      {isCreation ? (
        <Button variant="outlined" color="primary" className={classes.button}>
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
