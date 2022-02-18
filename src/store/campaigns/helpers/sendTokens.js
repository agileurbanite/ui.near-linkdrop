import { transfer } from 'near-api-js/lib/transaction';

// TODO Rename it to sendTokensFromWalletAccount or so
export const sendTokens = ({ wallet, receiverId, amount, callbackUrl }) =>
  wallet.account().signAndSendTransaction({
    receiverId,
    actions: [transfer(amount)],
    walletCallbackUrl: callbackUrl,
  });
