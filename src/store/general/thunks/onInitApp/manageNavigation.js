/* eslint consistent-return: 0 */
import { matchPath } from 'react-router';
import { campaignStatus } from '../../../../config/campaignStatus';
import { routes } from '../../../../config/routes';
import { getCampaignMetadata } from '../../../campaigns/helpers/getCampaignMetadata';
import { getUserContract } from '../../../helpers/getContracts';

const {
  root,
  connectWallet,
  createAccount,
  restoreAccess,
  campaigns,
  settings,
  createCampaign,
  campaign,
} = routes;

/*
  There is can't be a case when linkdrop.isExist === false && linkdrop.isConnected === true
  because 'checkUserAccounts' will disconnect user in this case.
 */
/* eslint-disable */
const campaignHandler = async ({ replace, wallet, linkdrop, state, history }) => {
  if (!wallet.isConnected) return replace(connectWallet);
  if (!linkdrop.isExist) return replace(createAccount);
  if (!linkdrop.isConnected) return replace(restoreAccess);

  // User can view only his own campaigns
  const campaignId = matchPath(history.location.pathname, campaign).params.campaignId;
  const userContract = getUserContract(state, linkdrop.accountId);
  const userCampaigns = await userContract.get_campaigns();
  const isOwnCampaign = userCampaigns.includes(campaignId);
  if (!isOwnCampaign) return replace(campaigns);

  // User can view only active campaigns
  const { status } = await getCampaignMetadata(state.general.entities.near.connection, campaignId);
  if (status !== campaignStatus.active) return replace(campaigns);
};

const mainPagesHandler = ({ replace, wallet, linkdrop }) => {
  if (!wallet.isConnected) return replace(connectWallet);
  if (!linkdrop.isExist) return replace(createAccount);
  if (!linkdrop.isConnected) return replace(restoreAccess);
};

const rootHandler = ({ replace, wallet, linkdrop }) => {
  if (!wallet.isConnected) return replace(connectWallet);
  if (!linkdrop.isExist) return replace(createAccount);
  if (!linkdrop.isConnected) return replace(restoreAccess);
  replace(campaigns);
};

const connectWalletHandler = ({ replace, wallet, linkdrop }) => {
  if (wallet.isConnected && !linkdrop.isExist) return replace(createAccount);
  if (wallet.isConnected && !linkdrop.isConnected) return replace(restoreAccess);
  if (wallet.isConnected && linkdrop.isExist && linkdrop.isConnected) return replace(campaigns);
};

const createAccountHandler = ({ replace, wallet, linkdrop }) => {
  if (!wallet.isConnected) return replace(connectWallet);
  if (linkdrop.isExist && !linkdrop.isConnected) return replace(restoreAccess);
  if (linkdrop.isExist && linkdrop.isConnected) return replace(campaigns);
};

const restoreAccessHandler = ({ replace, wallet, linkdrop }) => {
  if (!wallet.isConnected) return replace(connectWallet);
  if (!linkdrop.isExist) return replace(createAccount);
  if (linkdrop.isConnected) return replace(campaigns);
};

const handlers = {
  [root]: rootHandler,
  [connectWallet]: connectWalletHandler,
  [createAccount]: createAccountHandler,
  [restoreAccess]: restoreAccessHandler,
  [campaigns]: mainPagesHandler,
  [settings]: mainPagesHandler,
  [createCampaign]: mainPagesHandler,
  [campaign]: mainPagesHandler // campaignHandler, TODO Enable again campaignHandler
};

export const manageNavigation = async (state, history) => {
  const wallet = state.general.user.wallet;
  const linkdrop = state.general.user.linkdrop;

  const match = matchPath(history.location.pathname, {
    path: [
      root,
      connectWallet,
      createAccount,
      restoreAccess,
      campaigns,
      settings,
      createCampaign,
      campaign,
    ],
    exact: true,
  });

  if (match)
    await handlers[match.path]({ replace: history.replace, wallet, linkdrop, state, history });
};
