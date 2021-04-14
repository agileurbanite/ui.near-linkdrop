const testnet = {
  networkId: 'testnet',
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
  helperUrl: 'https://helper.testnet.near.org',
  explorerUrl: 'https://explorer.testnet.near.org',
  linkDropContractId: 'testnet',
};

const createHelpers = (config) => ({
  getCheckAccountInExplorerUrl: (accountId) => `${config.explorerUrl}/accounts/${accountId}`,
  getCreateAccountAndClaimLink: (secretKey) =>
    `${config.walletUrl}/create/${config.linkDropContractId}/${secretKey}`,
});

//
const getNearConfig = () => {
  const config = testnet;
  return {
    ...config,
    ...createHelpers(config),
  };
};

// TODO pass the env variable to get the real config based on the env where it runs
export const config = getNearConfig();
