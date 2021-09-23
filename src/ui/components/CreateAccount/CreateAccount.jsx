import React from "react";
import { Typography, Button, Box, Paper, Grid } from '@material-ui/core';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { useStoreActions } from 'easy-peasy';
import { generateMnemonic } from 'bip39-light';
import { Footer } from '../Footer/Footer';
import { useStyles } from './CreateAccount.styles';


export const CreateAccount = () => {
  const onCreateUser = useStoreActions((actions) => actions.general.user.onCreateUser);
  const classes = useStyles();

  const mnemonic = generateMnemonic();
  const createUser = () => onCreateUser({ mnemonic });
  const copyPhrase = async () => {
    try {
      await navigator.clipboard.writeText(mnemonic);
    } catch (e) {
      console.log('Error:', e);
    }

  }

  return (
    <>
      <div className={classes.container}>
        <Box maxWidth={820} className={classes.content}>
          <Box display="flex" m={2}>
            <img src="../images/key.png" alt="" />
          </Box>
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
              mnemonic ? mnemonic.split(' ').map((item, index)=>(
                  <Grid item lg={2} md={2} xs={6} key={item}>
                    <Paper elevation={0} className={classes.paper}>
                      {item} #{index+1}
                    </Paper>
                  </Grid>
                )
              ): null
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
              onClick={createUser}
            >
              Next
            </Button>
          </Box>
        </Box>
      </div>
      <Footer />
    </>
  );
};
