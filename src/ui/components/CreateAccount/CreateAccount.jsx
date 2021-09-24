import React from "react";
import {Box} from '@material-ui/core';
import {useStoreActions} from 'easy-peasy';
import {generateMnemonic} from 'bip39-light';
import {Footer} from '../Footer/Footer';
import {useStyles} from './CreateAccount.styles';
import {SetupPhrase} from "./SetupPhrase";


export const CreateAccount = () => {
  const onCreateUser = useStoreActions((actions) => actions.general.user.onCreateUser);
  const classes = useStyles();

  const mnemonic = generateMnemonic();

  const createUser = () => onCreateUser({mnemonic});

  return (
    <>
      <div className={classes.container}>
        <Box maxWidth={820} className={classes.content}>
          <Box display="flex" m={2}>
            <img src="../images/key.png" alt=""/>
          </Box>
          <SetupPhrase phrase={mnemonic} createUser={createUser}/>
        </Box>
      </div>
      <Footer/>
    </>
  );

};
