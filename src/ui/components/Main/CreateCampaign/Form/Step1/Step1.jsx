import { Button, Divider } from '@material-ui/core';
import { TextField } from '../../../general/TextField/TextField';
import { AmountPerLink } from './AmountPerLink/AmountPerLink';
import { Info } from './Info/Info';
import { emoji } from '../../../../../config/emoji';
import { useStyles } from './Step1.styles';

export const Step1 = ({ setStep, control, accountId, balance }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.emojiContainer}>
          <span className={classes.emoji}>{emoji.foxMuzzle}</span>
        </div>
        <div className={classes.inputs}>
          <TextField
            control={control}
            name="name"
            variant="outlined"
            fullWidth
            className={classes.name}
            label="Campaign name*"
          />
          <AmountPerLink control={control} />
          <TextField
            control={control}
            name="totalLinks"
            variant="outlined"
            label="Total links to distribute*"
            className={classes.totalLinks}
          />
        </div>
        <Divider className={classes.divider} />
        <Info accountId={accountId} balance={balance} />
      </div>
      <div className={classes.actions}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setStep(2)}
          className={classes.next}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
