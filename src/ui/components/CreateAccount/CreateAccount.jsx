import React, {useState} from "react";
import {useForm} from "react-hook-form";
import { Typography, Button, Box, Paper, Grid } from '@material-ui/core';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { useStoreActions } from 'easy-peasy';
import { generateMnemonic } from 'bip39-light';
import { Footer } from '../Footer/Footer';
import { useStyles } from './CreateAccount.styles';
import {TextField} from "../Main/general/TextField/TextField";


export const CreateAccount = () => {
  const onCreateUser = useStoreActions((actions) => actions.general.user.onCreateUser);
  const classes = useStyles();

  const mnemonic = generateMnemonic();

  const createUser = () => onCreateUser({ mnemonic });

  const SetupPhrase = ({phrase}) => {
    const [verifying, setVerifying] = useState(false);
    const copyPhrase = () => {
      navigator.clipboard.writeText(phrase);
    }
    const randomPhrase = Math.floor(Math.random()*12)+1;

    const verifyPhrase = () => {
      setVerifying(!verifying);
    }

    const VerifyForm = () => {
      const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
      } = useForm();

      const isValid = (word) => {
        return word === phrase.split(' ')[randomPhrase-1];
      }

      const onSubmit = handleSubmit(( values, e) => {
        e.preventDefault();
        if (!isValid(values.mnemonic)){
          setError('mnemonic',{
            type: "manual",
            message: "Please enter a valid word!",
          });
        } else {
          createUser();
        }
      });

      return (
            <>
              <Typography variant="h1" color="textPrimary" className={classes.header}>
                Verify Phrase
              </Typography>
              <Box maxWidth={592}>
                <Typography variant="body1" color="textSecondary" className={classes.subHeader}>
                  Enter the following word from your recovery phrase to complete the setup process.
                </Typography>
              </Box>
              <form onSubmit={onSubmit} className={classes.form}>
                <TextField
                  control={control}
                  name="mnemonic"
                  size="small"
                  InputProps={{disableUnderline: true}}
                  fullWidth
                  className={classes.input}
                  placeholder={`Word #${randomPhrase}`}
                />
                <Button variant="contained" color="primary" className={classes.button} type="submit">
                  Verify&Complete
                </Button>
                {errors.mnemonic && (
                  <Typography variant="caption" color="textPrimary" className={classes.onSubmitError}>
                    {errors.mnemonic.message}
                  </Typography>
                )}
              </form>
            </>
      )
    }

    return (
      !verifying ?
        <>
        <Typography variant="h1" color="textPrimary" className={classes.header}>
          Setup Phrase
        </Typography>
        <Box maxWidth={592}>
          <Typography variant="body1" color="textSecondary" className={classes.subHeader}>
            Copy or write down the following words in the exact order listed below. You are not
            able to recover your <strong className={classes.strong}>Linkdrop account</strong> without them
          </Typography>
        </Box>
        <Box display='flex' alignItems="center">
          <Grid container>
            {
              phrase.split(' ').map((item, index) => (
                <Grid item lg={2} md={4} xs={6} key={item}>
                  <Paper elevation={0} className={classes.paper}>
                    {item} #{index + 1}
                  </Paper>
                </Grid>
              ))
            }
          </Grid>
        </Box>
        <Box display="flex" className={classes.responsiveDirection}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            startIcon={<FileCopyOutlinedIcon/>}
            onClick={copyPhrase}
          >
            Copy Phrase
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={verifyPhrase}
          >
            Next
          </Button>
        </Box>
      </>: <VerifyForm />
    )
  };

  return (
    <>
      <div className={classes.container}>
        <Box maxWidth={820} className={classes.content}>
          <Box display="flex" m={2}>
            <img src="../images/key.png" alt="" />
          </Box>
             <SetupPhrase phrase={mnemonic}/>
        </Box>
      </div>
      <Footer />
    </>
  );

};
