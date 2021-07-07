import { transfer } from 'near-api-js/lib/transaction';

export const sendTokens = ({ wallet, receiverId, amount, callbackUrl }) =>
  wallet.account().signAndSendTransaction(receiverId, [transfer(amount)], callbackUrl);
