import { Link } from 'react-router-dom';
import { Typography, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { routes } from '../../../config/routes';
import { useStyles } from './CreateCampaign.styles';

export const CreateCampaign = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.topbar}>
        <Link to={routes.campaigns}>
          <IconButton>
            <Close className={classes.closeIcon} />
          </IconButton>
        </Link>
        <Typography variant="h3">Create Campaign</Typography>
      </div>
    </div>
  );
};
