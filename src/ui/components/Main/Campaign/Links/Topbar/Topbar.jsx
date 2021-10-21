import { Button } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';
import { useStoreActions } from 'easy-peasy';
import { useStyles } from './Topbar.styles';

export const Topbar = ({ campaignId }) => {
  const onExportCampaignCSV = useStoreActions((actions) => actions.campaigns.onExportCampaignCSV);
  const classes = useStyles();

  const exportCampaign = () => onExportCampaignCSV({ campaignId, fromCampaignPage: true });

  return (
    <div className={classes.topbar}>
      <Button
        onClick={exportCampaign}
        className={classes.downloadCSV}
        color="primary"
        variant="outlined"
      >
        <GetApp />
        <span className={classes.downloadCSVText}>Export Links CSV</span>
      </Button>
    </div>
  );
};
