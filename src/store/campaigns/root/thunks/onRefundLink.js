import BN from 'bn.js';
import { thunk } from 'easy-peasy';
import { toCamelCase } from '../../../helpers/toCamelCase';
import { getCampaignContract } from '../../../helpers/getContracts';

export const onRefundLink = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { pk, campaignId, setLoading, onClose } = payload;

  const state = getStoreState();
  const walletUserId = state.general.user.wallet.accountId;

  const actions = getStoreActions();
  const setError = actions.general.setError;
  const refundLink = actions.campaigns.refundLink;

  const campaign = getCampaignContract(state, campaignId);

  try {
    setLoading(true);

    await campaign.refund_keys({
      args: {
        keys: [pk],
        beneficiary_id: walletUserId,
      },
      gas: new BN('100000000000000'),
    });

    const [balance, metadata] = await Promise.all([
      campaign.account.getAccountBalance(),
      campaign.get_campaign_metadata(),
    ]);

    refundLink({ balance, metadata: toCamelCase(metadata), pk });
  } catch (e) {
    onClose();
    setError({ description: e.message });
  }
});
