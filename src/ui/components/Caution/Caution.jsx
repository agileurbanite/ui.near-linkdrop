import { ErrorOutline } from '@material-ui/icons';
import { nearConfig } from '../../../config/nearConfig';
import { useStyles } from './Caution.styles';

export const Caution = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ErrorOutline className={classes.icon} />
      {nearConfig.isTestnet ? (
        <span>Testnet Network</span>
      ) : (
        <>
          <span className={classes.caution}>CAUTION:</span>
          <span>
            The NEARDROP is beta software and <span className={classes.bold}>IS NOT AUDITED</span>.
            Use at your own responsibility.
          </span>
        </>
      )}
    </div>
  );
};
