import { useStoreActions } from 'easy-peasy';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Stepper } from './Stepper/Stepper';
import { Step1 } from './Step1/Step1';
import { Step2 } from './Step2/Step2';
import { emoji } from '../../../../config/emoji';
import { useStyles } from './Form.styles';

export const Form = () => {
  const onCreateCampaign = useStoreActions((actions) => actions.campaigns.onCreateCampaign);
  const [step, setStep] = useState(1);
  const { control, handleSubmit } = useForm();
  const classes = useStyles();

  const onSubmit = handleSubmit((values) => {
    // TODO We may add icon picker in the future
    onCreateCampaign({ ...values, icon: emoji.foxMuzzle });
  });

  return (
    <form onSubmit={onSubmit} className={classes.stepper}>
      <Stepper activeStep={step}>
        <Step1 setStep={setStep} control={control} />
        <Step2 setStep={setStep} />
      </Stepper>
    </form>
  );
};
