/*
  We don't have wallet.isExist because there is no difference between wallet.isConnected
  and wallet.isExist - in difference to linkdrop user account, we don't have a separate
  'Restore Access' page which is only available when
  linkdrop.isExist == true && linkdrop.isConnected == false
 */

export const initState = {
  wallet: {
    accountId: null,
    isConnected: false,
  },
  linkdrop: {
    accountId: null,
    isExist: false,
    isConnected: false,
    mnemonic: null,
    secretKey: null,
    publicKey: null,
  },
};
