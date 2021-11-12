import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 8,
    cursor: 'pointer',
  },
  name: {
    fontSize: 12,
    marginLeft: 3,
  }
};

export const useStyles = makeStyles(styles, { name: 'SocialMedia' });
