import { thunk } from 'easy-peasy';
import { parseNearAmount } from 'near-api-js/lib/utils/format';
import { redirectActions } from '../../../../config/redirectActions';
import { getRoute } from '../../../../config/routes';
import { sendTokens } from '../helpers/sendTokens';

const getCampaignAmount = (totalKeys, amountPerLink) => {
  // contract storage
  // key storage
  // tokens in key
  // gas fee for calling claim or create account
  const res = 2.7 + totalKeys * (Number(amountPerLink) + 0.01); // TODO change coefficients
  return parseNearAmount(res.toString());
};

export const onStartCampaignCreation = thunk(
  async (_, payload, { getStoreState, getStoreActions }) => {
    const { name: campaignName, icon, totalLinks, amountPerLink } = payload;

    const state = getStoreState();
    const wallet = state.general.entities.wallet;
    const linkdropUserId = state.general.user.linkdrop.accountId;

    const actions = getStoreActions();
    const setTemporaryData = actions.general.setTemporaryData;

    // TODO Rename form fields totalLinks -> totalKeys
    const totalKeys = Number(totalLinks);
    const yoctoNearPerKey = parseNearAmount(amountPerLink);

    // TODO Remove this and use data from payload;
    const campaignAmount = getCampaignAmount(totalKeys, amountPerLink);
    const redirectAction = redirectActions.createNearCampaign;

    setTemporaryData({
      redirectAction,
      campaignId: `${campaignName}.${linkdropUserId}`,
      campaignName,
      icon,
      yoctoNearPerKey,
      totalKeys,
      campaignAmount,
    });

    /*
    We send tokens to user instead of calling 'user.create_near_campaign' because
    'create_near_campaign' method is private
   */
    sendTokens({
      wallet,
      receiverId: linkdropUserId,
      amount: campaignAmount,
      callbackUrl: getRoute.callbackUrl({ redirectAction }),
    });
  },
);
