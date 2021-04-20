import { thunk } from 'easy-peasy';
import { Contract } from '../../../near/api/Сontract';

export const onMountCampaign = thunk(async (_, campaignId, { getStoreState, getStoreActions }) => {
  const store = getStoreState();
  const wallet = store.general.entities.wallet;
  const links = store.campaigns.map[campaignId].links;
  const actions = getStoreActions();
  const mountCampaign = actions.campaigns.mountCampaign;

  const contract = new Contract(wallet.account(), 'testnet', { viewMethods: ['get_key_balance'] });

  const keys = await Promise.allSettled(
    links.map(({ publicKey }) => contract.get_key_balance({ key: publicKey })),
  );
  mountCampaign({ campaignId, keys });
});
