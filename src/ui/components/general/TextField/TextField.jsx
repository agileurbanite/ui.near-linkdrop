import { TextField as MuiTextField } from '@material-ui/core';
import { useController } from 'react-hook-form';

export const TextField = ({
  type,
  control,
  name,
  defaultValue = '',
  variant,
  placeholder,
  className,
  muiClasses,
  InputProps,
  label,
  fullWidth,
  helperText,
  error,
}) => {
  const { field } = useController({ name, control, defaultValue });
  return (
    <MuiTextField
      type={type}
      inputRef={field.ref}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      variant={variant}
      placeholder={placeholder}
      className={className}
      classes={muiClasses}
      InputProps={InputProps}
      label={label}
      helperText={helperText}
      fullWidth={fullWidth}
      error={Boolean(error)}
    />
  );
};
