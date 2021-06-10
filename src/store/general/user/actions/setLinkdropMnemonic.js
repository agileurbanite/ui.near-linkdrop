import { action } from 'easy-peasy';

export const setLinkdropMnemonic = action((slice, mnemonic) => {
  slice.accounts[slice.currentAccount].linkdrop.mnemonic = mnemonic;
});
