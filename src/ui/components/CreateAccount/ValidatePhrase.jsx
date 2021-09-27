import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Typography } from '@material-ui/core';
import { TextField } from '../Main/general/TextField/TextField';
import { useStyles } from './CreateAccount.styles';

export const ValidatePhrase = ({ phrase, randomPhrase, createUser }) => {
  const classes = useStyles();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const isValid = (word) => {
    return word === phrase.split(' ')[randomPhrase - 1];
  };

  const onSubmit = handleSubmit((values, e) => {
    e.preventDefault();
    if (!isValid(values.mnemonic)) {
      setError('mnemonic', {
        type: 'manual',
        message: 'Please enter a valid word!',
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
          InputProps={{ disableUnderline: true }}
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
  );
};
