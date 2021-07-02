/* eslint-disable */
import BN from 'bn.js';
import { thunk } from 'easy-peasy';
import { KeyPair } from 'near-api-js';
import { Account } from 'near-api-js/lib/account';
import { parseSeedPhrase } from 'near-seed-phrase';
import { Contract } from '../../../../near/api/Сontract';
import { routes } from '../../../../ui/config/routes';
import { config } from '../../../../near/config';

/*
  Delete linkdrop user account
  1. Delete all campaigns and transfer rest of the tokens to the creator account;
  2. Delete linkdrop account and transfer rest of the tokens to the creator account;
  3. Remove account from LS and disconnect -> redirect to /connect-wallet;
 */

export const onDeleteLinkdropUser = thunk(
  async (_, payload, { getStoreState, getStoreActions }) => {
    const { history } = payload;

    const state = getStoreState();
    const near = state.general.entities.near;
    const wallet = state.general.entities.wallet;
    const keyStore = state.general.entities.keyStore;
    const walletUserId = state.general.user.currentAccount;
    const linkdropUserId = state.general.user.accounts[walletUserId].linkdrop.accountId;
    // const mnemonic = state.general.user.accounts[walletUserId].linkdrop.mnemonic;

    const actions = getStoreActions();
    const deleteLinkdropUser = actions.general.user.deleteLinkdropUser;

    const linkdropUser = await near.account(linkdropUserId);
    // const campaignsIds = await linkdropUser.viewFunction(linkdropUserId, 'get_campaigns');
    // console.log(campaignsIds);


    // const a = await Promise.allSettled(
    //   campaignsIds.map(async (campaignId) => {
    //     const account = await near.account(campaignId);
    //     const campaign = new Contract(account, campaignId, { changeMethods: ['delete_campaign'] });
    //
    //     await campaign.delete_campaign({
    //       payload: { beneficiary_id: walletUserId },
    //       gas: new BN('100000000000000'),
    //     });
    //     // await account.deleteAccount(walletUserId);
    //     await keyStore.removeKey(config.networkId, campaignId);
    //   }),
    // );
    // console.log(a);
    //
    await linkdropUser.deleteAccount(walletUserId);
    await keyStore.removeKey(config.networkId, linkdropUserId);
    wallet.signOut();
    deleteLinkdropUser(walletUserId);
    history.push(routes.connectWallet);
  },
);
