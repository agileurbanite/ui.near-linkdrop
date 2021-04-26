import { useStoreActions, useStoreState } from 'easy-peasy';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Stepper } from './Stepper/Stepper';
import { Step1 } from './Step1/Step1';
import { Step2 } from './Step2/Step2';
import { createCampaign } from '../../../../validation/createCampaign';
import { emoji } from '../../../../config/emoji';
import { useStyles } from './Form.styles';

export const Form = () => {
  const accountId = useStoreState((store) => store.general.user.accountId);
  const balance = useStoreState((store) => store.general.user.balance);
  const onCreateCampaign = useStoreActions((actions) => actions.campaigns.onCreateCampaign);
  const [step, setStep] = useState(1);
  const classes = useStyles();

  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      name: '',
      icon: emoji.foxMuzzle,
      amountPerLink: '',
      totalLinks: '',
    },
    resolver: createCampaign,
    mode: 'all',
  });

  const onSubmit = handleSubmit((values) => onCreateCampaign(values));

  return (
    <form onSubmit={onSubmit} className={classes.stepper}>
      <Stepper activeStep={step}>
        <Step1
          setStep={setStep}
          control={control}
          accountId={accountId}
          balance={balance}
          getValues={getValues}
        />
        <Step2 setStep={setStep} getValues={getValues} accountId={accountId} balance={balance} />
      </Stepper>
    </form>
  );
};
