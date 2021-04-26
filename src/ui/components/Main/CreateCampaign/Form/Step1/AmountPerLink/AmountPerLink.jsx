import { InputAdornment } from '@material-ui/core';
import { TextField } from '../../../../general/TextField/TextField';
import { Near } from '../../../../../general/icons/Near';
import { useStyles } from './AmountPerLink.styles';

export const AmountPerLink = ({ control, errors }) => {
  const classes = useStyles();
  return (
    <TextField
      control={control}
      name="amountPerLink"
      variant="outlined"
      label="Amount per link*"
      className={classes.textField}
      InputLabelProps={{ shrink: true }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Near className={classes.icon} />
            <span className={classes.adornmentText}>NEAR</span>
          </InputAdornment>
        ),
        classes: {
          root: classes.textFieldInputRoot,
        },
      }}
      error={Boolean(errors?.amountPerLink?.message)}
      helperText={errors?.amountPerLink?.message}
    />
  );
};
