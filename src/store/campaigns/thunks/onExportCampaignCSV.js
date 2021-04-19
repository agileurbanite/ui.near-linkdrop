import { thunk } from 'easy-peasy';
import { CsvBuilder } from 'filefy';
import { config } from '../../../near/config';

export const onExportCampaignCSV = thunk((_, payload, { getStoreState }) => {
  const { onClose, campaignId, event } = payload;
  const store = getStoreState();
  const campaign = store.campaigns.map[campaignId];



  const csvBuilder = new CsvBuilder(`${campaign.name}.csv`).setColumns(['public key', 'link']);

  campaign.links.forEach(({ publicKey, secretKey }) => {
    csvBuilder.addRow([publicKey, config.getCreateAccountAndClaimLink(secretKey)]);
  });

  csvBuilder.exportFile();

  onClose(event);
});
