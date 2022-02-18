import { Button, SvgIcon } from '@material-ui/core';
import { BarChart } from '@material-ui/icons';
import { CampaignIcon } from './CampaignIcon/CampaignIcon';
import { useStyles } from './CampaignInfo.styles';
import { Info } from './Info/Info';

export const CampaignInfo = ({ campaign }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.campaignIcon}>
          <CampaignIcon campaign={campaign} />
        </div>
        <Info campaign={campaign} />
        <div className={classes.analytics}>
          <Button
            className={classes.analyticsButton}
            startIcon={
              <SvgIcon
                component={BarChart}
                viewBox="1 2 18.67 18"
                className={classes.analyticsIcon}
              />
            }
          >
            Campaign analytics
          </Button>
        </div>
      </div>
    </div>
  );
};
