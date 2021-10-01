import { Typography } from '@material-ui/core';
import { DeleteUser } from './DeleteUser/DeleteUser';
import { useStyles } from './Settings.styles';

export const Settings = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.topbar}>
        <Typography variant="h3">Settings</Typography>
      </div>
      <div className={classes.content}>
        <DeleteUser />
      </div>
    </div>
  );
};
