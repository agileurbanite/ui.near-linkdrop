import { onStartCampaignCreation } from './onStartCampaignCreation';
import { onFinishCampaignCreation } from './onFinishCampaignCreation';
import { onMountCampaign } from './onMountCampaign';
import { onRefundLink } from './onRefundLink';
import { onExportCampaignCSV } from './onExportCampaignCSV';
import { onMountCampaigns } from './onMountCampaigns';
import { onLoadKeys } from './onLoadKeys';
import { onDeleteNearCampaign } from './onDeleteNearCampaign';
import { onDeleteNftCampaign } from './onDeleteNftCampaign';
import { onMountDeleteCampaign } from './onMountDeleteCampaign';
import { onMountCreateCampaign } from './onMountCreateCampaign';
import { onResumeCampaignCreation } from './onResumeCampaignCreation';
import { onResumeCampaignDeletion } from './onResumeCampaignDeletion';
import { onLoadNextQr } from './onLoadNextQr';
import { onLoadPrevQr } from './onLoadPrevQr';

export const thunks = {
  onStartCampaignCreation,
  onFinishCampaignCreation,
  onMountCampaign,
  onRefundLink,
  onExportCampaignCSV,
  onMountCampaigns,
  onLoadKeys,
  onDeleteNearCampaign,
  onDeleteNftCampaign,
  onMountDeleteCampaign,
  onMountCreateCampaign,
  onResumeCampaignCreation,
  onResumeCampaignDeletion,
  onLoadNextQr,
  onLoadPrevQr,
};
