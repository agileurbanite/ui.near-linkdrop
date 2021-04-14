import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getRoute } from '../../../../../config/routes';
import { useStyles } from './Campaign.styles';

export const Campaign = ({ campaign: { campaignId, name } }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.container} elevation={5}>
      <Link to={getRoute.campaign(campaignId)}>
        <span>{name}</span>
      </Link>
    </Paper>
  );
};
