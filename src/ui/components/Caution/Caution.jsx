import { ErrorOutline } from '@material-ui/icons';
import { useStyles } from './Caution.styles';

export const Caution = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ErrorOutline className={classes.icon} />
      <span className={classes.caution}>CAUTION:</span>
      <span>
        The NEAR Linkdrop is beta software and <span className={classes.bold}>IS NOT AUDITED</span>.
        Use at your own responsibility.
      </span>
    </div>
  );
};
