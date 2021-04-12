import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Stepper } from './Stepper/Stepper';
import { Step1 } from './Step1/Step1';
import { Step2 } from './Step2/Step2';
import { useStyles } from './Form.styles';

export const Form = () => {
  const [step, setStep] = useState(1);
  const { control } = useForm();
  const classes = useStyles();

  return (
    <div className={classes.stepper}>
      <Stepper activeStep={step}>
        <Step1 setStep={setStep} control={control} />
        <Step2 setStep={setStep} />
      </Stepper>
    </div>
  );
};
