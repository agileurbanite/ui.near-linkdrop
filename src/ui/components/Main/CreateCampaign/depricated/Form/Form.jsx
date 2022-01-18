/* eslint-disable */
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Stepper } from './Stepper/Stepper';
import { Step1 } from './Step1/Step1';
import { Step2 } from './Step2/Step2';
import { validations } from './validations';
import { emoji } from '../../../../../config/emoji';
import { useStyles } from './Form.styles';

export const Form = () => {
  const walletAccountId = useStoreState((store) => store.general.user.wallet.accountId);
  const linkdropAccountId = useStoreState((store) => store.general.user.linkdrop.accountId);
  const availableBalance = useStoreState(
    (store) => store.campaigns.createCampaign.availableBalance,
  );
  const campaignNames = useStoreState((store) => store.campaigns.createCampaign.campaignNames);
  const onStartCampaignCreation = useStoreActions(
    (actions) => actions.campaigns.onStartCampaignCreation,
  );
  const [step, setStep] = useState(1);
  const classes = useStyles();

  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      name: '',
      icon: emoji.foxMuzzle,
      amountPerLink: '',
      totalLinks: '',
    },
    resolver: validations,
    context: { campaignNames, linkdropAccountId },
    mode: 'all',
  });

  const onSubmit = handleSubmit((values) => onStartCampaignCreation(values));

  return (
    <form onSubmit={onSubmit} className={classes.stepper}>
      <Stepper activeStep={step}>
        <Step1
          setStep={setStep}
          control={control}
          walletAccountId={walletAccountId}
          availableBalance={availableBalance}
          getValues={getValues}
        />
        <Step2
          setStep={setStep}
          getValues={getValues}
          walletAccountId={walletAccountId}
          availableBalance={availableBalance}
        />
      </Stepper>
    </form>
  );
};
