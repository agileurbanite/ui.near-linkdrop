import { thunk } from 'easy-peasy';
import { toCamelCase } from '../../helpers/toCamelCase';
import { getCampaignContract } from '../../helpers/getContracts';

export const onRefundLink = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { pk, campaignId } = payload;

  const state = getStoreState();
  const walletUserId = state.general.user.currentAccount;

  const actions = getStoreActions();
  const setError = actions.general.setError;
  const refundLink = actions.campaigns.refundLink;

  const campaign = getCampaignContract(state, campaignId);

  try {
    await campaign.refund_keys({
      args: {
        keys: [pk],
        beneficiary_id: walletUserId,
      },
    });

    const [balance, metadata] = await Promise.all([
      campaign.account.getAccountBalance(),
      campaign.get_campaign_metadata(),
    ]);

    refundLink({ balance, metadata: toCamelCase(metadata), pk });
  } catch (e) {
    setError({ isError: true, description: e });
  }
});
