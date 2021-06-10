import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    width: 650,
    minHeight: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 36,
  },
  button: {
    marginTop: 24,
    padding: '16px 35px',
    fontWeight: 500,
  },
  onSubmitError: {
    marginTop: 12,
    color: theme.colors.red,
  },
});

export const useStyles = makeStyles(styles, { name: 'Form' });
