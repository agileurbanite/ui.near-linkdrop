import { Button } from '@material-ui/core';
import { useStyles } from './Step2.styles';

export const Step2 = ({ setStep }) => {
  const classes = useStyles();
  return (
    <div>
      Component
      <div className={classes.actions}>
        <Button variant="contained" color="primary" onClick={() => setStep(1)}>
          Back
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Confirm
        </Button>
      </div>
    </div>
  );
};
