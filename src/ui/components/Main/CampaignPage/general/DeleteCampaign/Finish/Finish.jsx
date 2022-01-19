import { Button } from '@material-ui/core';
import { CheckCircleOutline } from '@material-ui/icons';
import { useStyles } from './Finish.styles';

export const Finish = ({ closeModal }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CheckCircleOutline className={classes.icon} />
      <h1 className={classes.header}>Success</h1>
      <p className={classes.text}>The campaign was successfully deleted</p>
      <Button variant="contained" onClick={closeModal} className={classes.button}>
        Got it
      </Button>
    </div>
  );
};
