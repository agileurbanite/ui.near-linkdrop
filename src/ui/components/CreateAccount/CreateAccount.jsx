import { Box } from '@material-ui/core';
import { generateMnemonic } from 'bip39-light';
import { useEffect, useState } from 'react';
import { Footer } from '../Footer/Footer';
import { SetupPhrase } from './SetupPhrase/SetupPhrase';
import { useStyles } from './CreateAccount.styles';
import key from '../../images/key.png';
import { ValidatePhrase } from './ValidatePhrase/ValidatePhrase';

export const CreateAccount = () => {
  const [step, setStep] = useState(1);
  const [phraseBag, setPhraseBag] = useState();
  const classes = useStyles();

  useEffect(() => {
    const mnemonic = generateMnemonic();
    setPhraseBag({
      mnemonic,
      wordList: mnemonic.split(' '),
      randomWordIndex: Math.floor(Math.random() * 12) + 1,
    });
  }, []);

  const goToSetupPhrase = () => setStep(1);
  const goToValidatePhrase = () => setStep(2);

  if (!phraseBag) return null;

  return (
    <>
      <div className={classes.container}>
        <Box maxWidth={820} className={classes.content}>
          <Box display="flex" m={2}>
            <img src={key} alt="key" />
          </Box>
          {step === 1 && (
            <SetupPhrase phraseBag={phraseBag} goToValidatePhrase={goToValidatePhrase} />
          )}
          {step === 2 && <ValidatePhrase phraseBag={phraseBag} goToSetupPhrase={goToSetupPhrase} />}
        </Box>
      </div>
      <Footer />
    </>
  );
};
