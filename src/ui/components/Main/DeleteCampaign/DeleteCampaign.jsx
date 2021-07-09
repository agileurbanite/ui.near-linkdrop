import { Typography } from '@material-ui/core';
import { useStyles } from './DeleteCampaign.styles';

export const DeleteCampaign = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.topbar}>
        <Typography variant="h3">Delete Campaign</Typography>
      </div>
    </div>
  );
};
