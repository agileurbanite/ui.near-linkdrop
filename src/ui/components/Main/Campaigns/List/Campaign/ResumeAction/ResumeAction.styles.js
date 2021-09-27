import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    gridArea: '4 / 1 / 8 / 9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 36,
    width: '50%',
    borderRadius: 8,
    padding: '0',
    fontSize: 12
  },
};

export const useStyles = makeStyles(styles, { name: 'ResumeAction' });
