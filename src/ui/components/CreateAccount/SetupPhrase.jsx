import React, { useState } from 'react';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { useStyles } from './CreateAccount.styles';
import { ValidatePhrase } from './ValidatePhrase';

export const SetupPhrase = ({ phrase, createUser }) => {
  const classes = useStyles();
  const [verifying, setVerifying] = useState(false);
  const copyPhrase = () => {
    navigator.clipboard.writeText(phrase);
  };
  const randomPhrase = Math.floor(Math.random() * 12) + 1;

  const verifyPhrase = () => {
    setVerifying(!verifying);
  };

  return !verifying ? (
    <>
      <Typography variant="h1" color="textPrimary" className={classes.header}>
        Setup Phrase
      </Typography>
      <Box maxWidth={592}>
        <Typography variant="body1" color="textSecondary" className={classes.subHeader}>
          Copy or write down the following words in the exact order listed below. You are not able
          to recover your <strong className={classes.strong}>Linkdrop account</strong> without them
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Grid container>
          {phrase.split(' ').map((item, index) => (
            <Grid item lg={2} md={4} xs={6} key={item}>
              <Paper elevation={0} className={classes.paper}>
                {item} #{index + 1}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box display="flex" className={classes.responsiveDirection}>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          startIcon={<FileCopyOutlinedIcon />}
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
    </>
  ) : (
    <ValidatePhrase phrase={phrase} randomPhrase={randomPhrase} createUser={createUser} />
  );
};
