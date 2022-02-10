import { onDeleteNearCampaign } from './onDeleteNearCampaign';
import { onDeleteNftCampaign } from './onDeleteNftCampaign';
import { onExportCampaignCSV } from './onExportCampaignCSV';
import { onFinishCampaignCreation } from './onFinishCampaignCreation';
import { onLoadKeys } from './onLoadKeys';
import { onLoadNextQr } from './onLoadNextQr';
import { onLoadPrevQr } from './onLoadPrevQr';
import { onMountCampaign } from './onMountCampaign/onMountCampaign';
import { onMountCampaigns } from './onMountCampaigns';
import { onMountCreateCampaign } from './onMountCreateCampaign';
import { onMountDeleteCampaign } from './onMountDeleteCampaign';
import { onRefundLink } from './onRefundLink';
import { onResumeCampaignCreation } from './onResumeCampaignCreation';
import { onResumeCampaignDeletion } from './onResumeCampaignDeletion';
import { onStartCampaignCreation } from './onStartCampaignCreation';

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
