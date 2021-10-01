import { Button, Divider } from '@material-ui/core';
import { useFormState } from 'react-hook-form';
import { TextField } from '../../../../general/TextField/TextField';
import { AmountPerLink } from './AmountPerLink/AmountPerLink';
import { Info } from './Info/Info';
import { emoji } from '../../../../../config/emoji';
import { useStyles } from './Step1.styles';

export const Step1 = ({ setStep, control, walletAccountId, availableBalance }) => {
  const { errors, isValid } = useFormState({ control });
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
            error={Boolean(errors?.name?.message)}
            helperText={errors?.name?.message}
          />
          <AmountPerLink control={control} errors={errors} />
          <TextField
            control={control}
            name="totalLinks"
            variant="outlined"
            label="Total links to distribute*"
            className={classes.totalLinks}
            InputLabelProps={{ shrink: true }}
            error={Boolean(errors?.totalLinks?.message)}
            helperText={errors?.totalLinks?.message}
          />
        </div>
        <Divider className={classes.divider} />
        <Info walletAccountId={walletAccountId} availableBalance={availableBalance} />
      </div>
      <div className={classes.actions}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setStep(2)}
          className={classes.next}
          disabled={!isValid}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
