import { onStartCampaignCreation } from './onStartCampaignCreation';
import { onFinishCampaignCreation } from './onFinishCampaignCreation';
import { onMountCampaign } from './onMountCampaign';
import { onRefundLink } from './onRefundLink';
import { onExportCampaignCSV } from './onExportCampaignCSV';
import { onMountCampaigns } from './onMountCampaigns';
import { onLoadKeys } from './onLoadKeys';
import { onDeleteCampaign } from './onDeleteCampaign';
import { onMountDeleteCampaign } from './onMountDeleteCampaign';
import { onMountCreateCampaign } from './onMountCreateCampaign';
import { onResumeCampaignCreation } from './onResumeCampaignCreation';
import { onResumeCampaignDeletion } from './onResumeCampaignDeletion';
import { onLoadQr } from './onLoadQr';

export const thunks = {
  onStartCampaignCreation,
  onFinishCampaignCreation,
  onMountCampaign,
  onRefundLink,
  onExportCampaignCSV,
  onMountCampaigns,
  onLoadKeys,
  onDeleteCampaign,
  onMountDeleteCampaign,
  onMountCreateCampaign,
  onResumeCampaignCreation,
  onResumeCampaignDeletion,
  onLoadQr,
};
