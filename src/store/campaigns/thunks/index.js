import { onCreateCampaign } from './onCreateCampaign';
import { onMountCampaign } from './onMountCampaign';
import { onCancelLink } from './onCancelLink';
import { onExportCampaignCSV } from './onExportCampaignCSV';
import { onExportLinksCSV } from './onExportLinksCSV';

export const thunks = {
  onCreateCampaign,
  onMountCampaign,
  onCancelLink,
  onExportCampaignCSV,
  onExportLinksCSV,
};
