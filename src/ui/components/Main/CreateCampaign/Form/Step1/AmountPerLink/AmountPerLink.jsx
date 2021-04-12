import { InputAdornment } from '@material-ui/core';
import { TextField } from '../../../../general/TextField/TextField';
import { Near } from '../../../../../general/icons/Near';
import { useStyles } from './AmountPerLink.styles';

export const AmountPerLink = ({ control }) => {
  const classes = useStyles();
  return (
    <TextField
      control={control}
      name="amountPerLink"
      variant="outlined"
      placeholder="Amount per link*"
      className={classes.textField}
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
    />
  );
};
