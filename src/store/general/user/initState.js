/*
  State example:

  currentAccount: 'eclipseeer2.testnet',
  accounts: {
    'eclipseeer2.testnet': {
      wallet: {
        isExist: true,
        accountId: 'eclipseeer2.testnet',
      },
      linkdrop: {
        isExist: true,
        accountId: 'eclipseeer2.linkdrop.testnet',
        mnemonic: 'relief mansion marine spare thank park vessel beach electric dentist say lemon',
        secretKey: '',
        publicKey: ''
      },
    }
  },
 */

export const initState = {
  currentAccount: null,
  accounts: {},
};
