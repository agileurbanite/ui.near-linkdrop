import { Button, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { emoji } from '../../../../config/emoji';
import { routes } from '../../../../../config/routes';
import { useStyles } from './NoCampaigns.styles';

export const NoCampaigns = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span className={classes.emoji}>{emoji.confusedMan}</span>
      <Typography variant="h1" color="textPrimary" className={classes.header}>
        No Campaigns
      </Typography>
      <Typography variant="subtitle1" className={classes.title}>
        Setup a campaign to generate Linkdrops
      </Typography>
      <Link to={routes.createCampaign}>
        <Button variant="contained" color="primary" className={classes.button}>
          <Add className={classes.addIcon} />
          New Campaign
        </Button>
      </Link>
    </div>
  );
};
