/* eslint-disable */
import { thunk } from 'easy-peasy';
import { KeyPair } from 'near-api-js';
import { Account } from 'near-api-js/lib/account';
import { functionCall } from 'near-api-js/lib/transaction';
import { parseNearAmount } from 'near-api-js/lib/utils/format';
import { getKeysFromMnemonic } from '../../root/helpers/getKeysFromMnemonic';

// ed25519:w4Nb233J1hzb6tywhabjTKjsAysz9Y9N3fbDwzG3BU6 - ed25519:3V5rYNwYfYsSRzuAr8jhf64D6kRwppuy9k3m8CxXQxqNHLa2dGAe162sZNUwjXJxfkGtvf8XnG42qV5MnYrJcocW
// ed25519:fzakaxVD42YWSGFugDZJbXroCJtAjES6FXZXro5dtXs - ed25519:sqmT3buv7FExZV2ANjV5Ee5ix8FV2iG4PPE74nnnUGYz4VcpCRq44rPsPKeWFsZ9M6SwF3QLskFPrnxVXeH2MBo

const createTxCreator = (account) => async (tokenId, pk) => {
  const [, signedTx] = await account.signTransaction('dev-1636123728779-29153762080548', [
    functionCall(
      'nft_transfer_call',
      {
        token_id: tokenId,
        receiver_id: 'abc2.eclipseer.linkdrop.testnet',
        msg: pk,
      },
      '40000000000000',
      1,
    ),
  ]);
  return signedTx;
};

export const transferNft = thunk(
  async (_, __, { getStoreState, getStoreActions }) => {
    const state = getStoreState();
    const walletAccountId = state.general.user.wallet.accountId;
    const wallet = state.general.entities.wallet;
    const near = state.general.entities.near;

    console.log('transferNftsOwnershipToCampaign');

    // 1. generate keys based on selected list
    // 2. wallet account has to call 'nft_transfer_call' multiple times
    // show links

    try {
      const keyPair = KeyPair.fromString(
        'ed25519:ukTK5k9A5qotUoEZF4meaCCMigMvcfaDRyesLjUhPR9x7nwZbFGxSQmpWmt9x5hEfNPt3AcFW8UFPZ1FgZk8sfn', // claim nft key
      );
      await near.config.keyStore.setKey('testnet', walletAccountId, keyPair);

      const createTx = createTxCreator(new Account(near.connection, walletAccountId));
      const tx = await createTx('1', 'ed25519:w4Nb233J1hzb6tywhabjTKjsAysz9Y9N3fbDwzG3BU6');

      const res = await near.connection.provider.sendTransaction(tx);
      console.log(res);
      // TODO Delete full access key after all NFT will be transferred;
    } catch (e) {
      console.log(e);
    }
  },
);
