import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 50,
  }
};

export const useStyles = makeStyles(styles, { name: 'Links' });
