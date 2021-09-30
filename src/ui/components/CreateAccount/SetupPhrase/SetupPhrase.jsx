import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { useStyles } from './SetupPhrase.styles';

export const SetupPhrase = ({ phraseBag: { mnemonic, wordList }, goToValidatePhrase }) => {
  const classes = useStyles();

  const copyPhrase = () => navigator.clipboard.writeText(mnemonic);

  return (
    <>
      <Typography variant="h1" color="textPrimary" className={classes.header}>
        Create Linkdrop Account
      </Typography>
      <Box maxWidth={592}>
        <Typography variant="body1" color="textSecondary" className={classes.subHeader}>
          Copy or write down the following words in the exact order listed below. You will not be
          able to restore access to your Linkdrop account without this seed phrase, which could
          result in the loss of your funds.
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Grid container>
          {wordList.map((word, i) => (
            <Grid item lg={2} md={4} xs={6} key={word}>
              <Paper elevation={0} className={classes.paper}>
                <span>#{i + 1}</span> {word}
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
          onClick={goToValidatePhrase}
        >
          Verify Phrase
        </Button>
      </Box>
    </>
  );
};
