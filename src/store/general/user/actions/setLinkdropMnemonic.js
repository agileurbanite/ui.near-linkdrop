import { action } from 'easy-peasy';

export const setLinkdropMnemonic = action((slice, payload) => {
  const { walletUserId, mnemonic, publicKey, secretKey } = payload;
  const linkdrop = slice.accounts[walletUserId].linkdrop;

  linkdrop.isExist = true;
  linkdrop.mnemonic = mnemonic;
  linkdrop.publicKey = publicKey;
  linkdrop.secretKey = secretKey;
});
