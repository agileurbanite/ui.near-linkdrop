import dateFormat from 'dateformat';
import { thunk } from 'easy-peasy';
import { CsvBuilder } from 'filefy';
import { nearConfig } from '../../../config/nearConfig';
import { getKeysFromMnemonic } from '../helpers/keys/getKeysFromMnemonic';

export const onExportCampaignCSV = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { campaignId, fromCampaignPage } = payload;

  const state = getStoreState();
  const mnemonic = state.general.user.linkdrop.mnemonic;
  const campaign = fromCampaignPage ? state.campaigns.campaign : state.campaigns.map[campaignId];
  const total = campaign.keysStats.total;
  const name = campaign.name;
  const internalCampaignId = campaign.internalCampaignId;

  const actions = getStoreActions();
  const enableLoading = actions.general.enableLoading;
  const disableLoading = actions.general.disableLoading;

  enableLoading();

  const start = 1;
  const end = total;

  const keys = await getKeysFromMnemonic({ mnemonic, start, end, internalCampaignId });

  const date = dateFormat(Date.now(), 'd_mmm_yyyy-HH_MM_ss');
  const fileName = `${name}[${start}-${end}][${date}.csv`;
  const csvBuilder = new CsvBuilder(fileName).setColumns(['order', 'link']);

  keys.forEach(({ sk, order }) => {
    csvBuilder.addRow([`#${order}`, nearConfig.getCreateAccountAndClaimLink(sk, campaignId)]);
  });

  csvBuilder.exportFile();
  disableLoading();
});
