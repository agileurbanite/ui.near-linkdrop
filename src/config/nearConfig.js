const testnet = {
  networkId: 'testnet',
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
  helperUrl: 'https://helper.testnet.near.org',
  explorerUrl: 'https://explorer.testnet.near.org',
  accounts: {
    // linkdrop: 'linkdrop.testnet', // V1
    linkdrop: 'dev-neardrop.testnet', // TODO: use an env variable for this
    accountCreator: 'testnet',
  },
  isTestnet: true,
};

const mainnet = {
  networkId: 'mainnet',
  nodeUrl: 'https://rpc.mainnet.near.org',
  walletUrl: 'https://wallet.near.org',
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
  getCreateAccountAndClaimLink: (secretKey, campaignId) =>
    `${config.walletUrl}/linkdrop/${campaignId}/${secretKey}`,
  getClaimNftLink: (secretKey, campaignId) =>
    `${window.location.origin}/claim/${campaignId}/${secretKey}`,
});

const getNearConfig = (network) => {
  const config = configs[network];
  return {
    ...config,
    ...createHelpers(config),
  };
};

export const nearConfig = getNearConfig(process.env.REACT_APP_NETWORK);
