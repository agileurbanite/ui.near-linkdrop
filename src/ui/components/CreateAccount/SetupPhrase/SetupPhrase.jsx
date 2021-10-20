import { Box, Button, Grid, Typography } from '@material-ui/core';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { useStyles } from './SetupPhrase.styles';

export const SetupPhrase = ({ phraseBag: { mnemonic, wordList }, goToValidatePhrase }) => {
  const classes = useStyles();

  const copyPhrase = () => navigator.clipboard.writeText(mnemonic);

  return (
    <>
      <Typography variant="h1" color="textPrimary" className={classes.header}>
        Create Account
      </Typography>
      <Box maxWidth={592}>
        <Typography variant="body1" color="textSecondary" className={classes.description}>
          Copy or write down the following words in the exact order listed below. You are not able
          to recover your <span>Linkdrop account</span> without them
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Grid container>
          {wordList.map((word, i) => (
            <Grid item xs={6} sm={4} md={2} lg={2} key={word}>
              <div className={classes.paper}>
                {word} <span>#{i + 1}</span>
              </div>
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
          Next
        </Button>
      </Box>
    </>
  );
};
