export const initState = {
  isLoading: false,
  error: {
    isError: false,
    description: '',
  },
  notifications: {},
  user: {
    isConnected: false,
    accountId: null,
    balance: null,
    linkdrop: {
      accountId: null,
    }
  },
  entities: {
    near: null,
    keyStore: null,
    wallet: null,
  },
  temporary: {},
};
