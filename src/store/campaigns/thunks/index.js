import { onCreateCampaign } from './onCreateCampaign';
import { onCompleteCampaignCreation } from './onCompleteCampaignCreation';
import { onMountCampaign } from './onMountCampaign';
import { onCancelLink } from './onCancelLink';
import { onExportCampaignCSV } from './onExportCampaignCSV';
import { onExportLinksCSV } from './onExportLinksCSV';
import { onMountCampaigns } from './onMountCampaigns';

export const thunks = {
  onCreateCampaign,
  onCompleteCampaignCreation,
  onMountCampaign,
  onCancelLink,
  onExportCampaignCSV,
  onExportLinksCSV,
  onMountCampaigns,
};
