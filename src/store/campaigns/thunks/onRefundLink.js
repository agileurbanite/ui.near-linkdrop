import { thunk } from 'easy-peasy';
import { Account } from 'near-api-js';
import { getCampaignContract } from '../../../near/helpers/getCampaignContract';

export const onRefundLink = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { pk, campaignId } = payload;

  const state = getStoreState();
  const near = state.general.entities.near;
  const walletUserId = state.general.user.currentAccount;

  const actions = getStoreActions();
  const setError = actions.general.setError;
  const refundLink = actions.campaigns.refundLink;

  const account = new Account(near.connection, campaignId);
  const campaign = getCampaignContract(state, campaignId);

  try {
    await campaign.refund_keys({
      payload: {
        keys: [pk],
        beneficiary_id: walletUserId,
      },
    });

    const [balance, metadata] = await Promise.all([
      account.getAccountBalance(),
      campaign.get_campaign_metadata(),
    ]);

    refundLink({ balance, metadata, pk });
  } catch (e) {
    setError({
      isError: true,
      description: e,
    });
  }
});
