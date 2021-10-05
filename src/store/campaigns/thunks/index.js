import { onStartCampaignCreation } from './onStartCampaignCreation';
import { onFinishCampaignCreation } from './onFinishCampaignCreation';
import { onMountCampaign } from './onMountCampaign';
import { onRefundLink } from './onRefundLink';
import { onExportCampaignCSV } from './onExportCampaignCSV';
import { onExportLinksCSV } from './onExportLinksCSV';
import { onMountCampaigns } from './onMountCampaigns';
import { onLoadKeys } from './onLoadKeys';
import { onDeleteCampaign } from './onDeleteCampaign';
import { onMountDeleteCampaign } from './onMountDeleteCampaign';
import { onMountCreateCampaign } from './onMountCreateCampaign';
import { onResumeCampaignCreation } from './onResumeCampaignCreation';

export const thunks = {
  onStartCampaignCreation,
  onFinishCampaignCreation,
  onMountCampaign,
  onRefundLink,
  onExportCampaignCSV,
  onExportLinksCSV,
  onMountCampaigns,
  onLoadKeys,
  onDeleteCampaign,
  onMountDeleteCampaign,
  onMountCreateCampaign,
  onResumeCampaignCreation,
};
