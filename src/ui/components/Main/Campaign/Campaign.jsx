// import { useStoreState } from 'easy-peasy';
// import { Link } from 'react-router-dom';
// import { Typography, IconButton } from '@material-ui/core';
// import { ArrowBack } from '@material-ui/icons';
// import { CampaignProfileCard } from '../general/CampaignProfileCard/CampaignProfileCard';
// import { AdditionalData } from './AdditionalData/AdditionalData';
// import { Links } from './Links/Links';
// import { routes } from '../../../config/routes';
import { useStyles } from './Campaign.styles';

export const Campaign = () => {
  // const campaign = useStoreState((store) => store.campaigns.campaign);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/*<div className={classes.topbar}>*/}
      {/*  <Link to={routes.campaigns}>*/}
      {/*    <IconButton>*/}
      {/*      <ArrowBack className={classes.closeIcon} />*/}
      {/*    </IconButton>*/}
      {/*  </Link>*/}
      {/*  <Typography variant="h3">{campaign.name}</Typography>*/}
      {/*</div>*/}
      {/*<div className={classes.body}>*/}
      {/*  <CampaignProfileCard campaign={campaign} />*/}
      {/*  <AdditionalData campaign={campaign} />*/}
      {/*  <Links campaign={campaign} />*/}
      {/*</div>*/}
    </div>
  );
};
