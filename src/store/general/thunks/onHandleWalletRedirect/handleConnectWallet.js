export const handleConnectWallet = (actions) => {
  actions.general.setError({
    isError: true,
    description: 'You have not connected your wallet',
  });
};
