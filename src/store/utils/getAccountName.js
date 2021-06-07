/*
  eclipseeer2.testnet -> eclipseeer2
  abc.eclipseeer2.near -> abc-eclipseeer2
  testnet.alice.example.eclipseeer2.testnet -> testnet-alice-example-eclipseeer2
  long-account-id -> long-account-id
 */
export const getAccountName = (account) => {
  const arr = account.split('.');
  const last = arr[arr.length - 1];

  if (last === 'testnet' || last === 'near') {
    arr.pop();
  }
  return arr.join('-');
};
