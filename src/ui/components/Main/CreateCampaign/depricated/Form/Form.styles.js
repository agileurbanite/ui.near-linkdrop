import { makeStyles } from '@material-ui/core';

const styles = {
  stepper: {
    gridArea: 'b',
    width: '100%',
    justifySelf: 'center',
  },
};

export const useStyles = makeStyles(styles, { name: 'Form' });
