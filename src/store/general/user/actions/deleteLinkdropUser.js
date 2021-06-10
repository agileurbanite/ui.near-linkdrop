import { action } from 'easy-peasy';

export const deleteLinkdropUser = action((slice, walletUserId) => {
  slice.currentAccount = null;
  delete slice.accounts[walletUserId];
});
