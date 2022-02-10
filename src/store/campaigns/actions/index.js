import { closeQrModal } from './closeQrModal';
import { deleteCampaign } from './deleteCampaign';
import { loadKeys } from './loadKeys';
import { mountCampaign } from './mountCampaign';
import { mountCampaigns } from './mountCampaigns';
import { mountCreateCampaign } from './mountCreateCampaign';
import { openNextLink } from './openNextLink';
import { openPrevLink } from './openPrevLink';
import { openQrModal } from './openQrModal';
import { refundLink } from './refundLink';
import { setNftCampaign } from './setNftCampaign';

export const actions = {
  refundLink,
  mountCampaign,
  setNftCampaign,
  mountCampaigns,
  loadKeys,
  deleteCampaign,
  mountCreateCampaign,
  openQrModal,
  closeQrModal,
  openNextLink,
  openPrevLink,
};
