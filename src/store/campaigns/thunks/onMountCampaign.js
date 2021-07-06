import { thunk } from 'easy-peasy';
import { Account } from 'near-api-js';
import { Contract } from '../../../near/api/Сontract';
import { getKeysFromMnemonic } from '../helpers/getKeysFromMnemonic';
import { getKeysRange } from '../helpers/getKeysRange';

export const onMountCampaign = thunk(async (_, campaignId, { getStoreState, getStoreActions }) => {
  const state = getStoreState();
  const near = state.general.entities.near;
  const walletUserId = state.general.user.currentAccount;
  const mnemonic = state.general.user.accounts[walletUserId].linkdrop.mnemonic;

  const actions = getStoreActions();
  const mountCampaign = actions.campaigns.mountCampaign;

  const campaign = new Contract(new Account(near.connection, campaignId), campaignId, {
    viewMethods: ['get_campaign_metadata', 'get_keys'],
  });

  const metadata = await campaign.get_campaign_metadata();

  // TODO move to webworker
  const { start, end } = getKeysRange({
    page: 1,
    total: metadata.keys_stats.total,
    keysPerPage: 50,
  });
  const keys = getKeysFromMnemonic({ mnemonic, start, end });

  const keyStats = await campaign.get_keys({ keys: keys.map(({ pk }) => pk) });

  mountCampaign({ campaignId, metadata, keys, keyStats });
});
