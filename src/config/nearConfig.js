const testnet = {
  networkId: 'testnet',
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://testnet.mynearwallet.com',
  helperUrl: 'https://helper.testnet.near.org',
  explorerUrl: 'https://explorer.testnet.near.org',
  accounts: {
    linkdrop: 'linkdrop.testnet',
    accountCreator: 'testnet',
  },
  isTestnet: true,
};

const mainnet = {
  networkId: 'mainnet',
  nodeUrl: 'https://rpc.mainnet.near.org',
  walletUrl: 'https://app.mynearwallet.com',
  helperUrl: 'https://helper.mainnet.near.org',
  explorerUrl: 'https://explorer.near.org',
  accounts: {
    linkdrop: 'linkdropv1.near',
    accountCreator: 'near',
  },
  isTestnet: false,
};

const configs = {
  testnet,
  mainnet,
};

const createHelpers = (config) => ({
  getCheckAccountInExplorerUrl: (accountId) => `${config.explorerUrl}/accounts/${accountId}`,
  getCreateAccountAndClaimLink: (secretKey, campaignAccountId) =>
    `${config.walletUrl}/linkdrop/${campaignAccountId}/${secretKey}`,
});

const getNearConfig = (network) => {
  const config = configs[network];
  return {
    ...config,
    ...createHelpers(config),
  };
};

export const nearConfig = getNearConfig(process.env.REACT_APP_NETWORK);
