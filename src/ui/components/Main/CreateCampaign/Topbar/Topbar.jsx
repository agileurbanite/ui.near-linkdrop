import { IconButton, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { routes } from '../../../../../config/routes';
import { useJss } from './Topbar.jss';

export const Topbar = () => {
  const jss = useJss();

  return (
    <div className={jss.topbar}>
      <Link to={routes.campaigns}>
        <IconButton>
          <Close className={jss.closeIcon} />
        </IconButton>
      </Link>
      <Typography variant="h3">Create Campaign</Typography>
    </div>
  );
};
