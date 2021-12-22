import { thunk } from 'easy-peasy';
import { transactions } from 'near-api-js';
import { PublicKey } from 'near-api-js/lib/utils';
import { createTransaction } from 'near-api-js/lib/transaction';
import { base_decode as baseDecode } from 'near-api-js/lib/utils/serialize';

export const prepareForNftCampaignCreation = thunk(
  async (_, __, { getStoreState, getStoreActions }) => {
    const state = getStoreState();
    const walletAccountId = state.general.user.wallet.accountId;
    const linkdropAccountId = state.general.user.linkdrop.accountId;
    const wallet = state.general.entities.wallet;
    const near = state.general.entities.near;
    const actions = getStoreActions();

    //  "public_key": "ed25519:2zRD6HekaqUtUkoiwYAus5husSgEbaJ9k6NCbP6QW3Lk",
    //   "private_key": "ed25519:ukTK5k9A5qotUoEZF4meaCCMigMvcfaDRyesLjUhPR9x7nwZbFGxSQmpWmt9x5hEfNPt3AcFW8UFPZ1FgZk8sfn"
    // const result = await account.signAndSendTransaction(walletAccountId, [
    //   transactions.addKey(
    //     PublicKey.from('ed25519:2zRD6HekaqUtUkoiwYAus5husSgEbaJ9k6NCbP6QW3Lk'),
    //     transactions.functionCallAccessKey(
    //       'dev-1636123728779-29153762080548',
    //       ['nft_transfer', 'nft_transfer_call'],
    //       '250000000000000000000000',
    //     ),
    //   ),
    //   transactions.transfer('2500000000000000000000000')
    // ]);
    // console.log(result);

    const block = await near.connection.provider.block({ finality: 'final' });
    const blockHash = baseDecode(block.header.hash);

    const localKey = await near.connection.signer.getPublicKey(
      walletAccountId,
      near.connection.networkId,
    );
    const accessKey = await wallet.account().accessKeyForTransaction(walletAccountId, [], localKey);
    const publicKey = PublicKey.from(accessKey.public_key);
    console.log(accessKey);
    /*TODO:
       1) Handle max transactions amount (if we will have 100 collections e.t) which we can
       pass to Wallet via URL.
       2) Do we need to add a new keys for every campaign? What if we can reuse the existing ones?
     */

    await wallet.requestSignTransactions({
      transactions: [
        createTransaction(
          walletAccountId,
          publicKey,
          walletAccountId,
          accessKey.access_key.nonce + 1,
          [
            transactions.addKey(
              PublicKey.from('ed25519:2zRD6HekaqUtUkoiwYAus5husSgEbaJ9k6NCbP6QW3Lk'),
              transactions.functionCallAccessKey(
                'dev-1636123728779-29153762080548',
                ['nft_transfer', 'nft_transfer_call'],
                '250000000000000000000000',
              ),
            ),
          ],
          blockHash,
        ),
        createTransaction(
          walletAccountId,
          publicKey,
          linkdropAccountId,
          accessKey.access_key.nonce + 2,
          [transactions.transfer('2500000000000000000000000')],
          blockHash,
        ),
      ],
    });

    // add keys for wallet account - dev-1636123728779-29153762080548
    // transfer NEAR to neardrop account

    try {
      console.log('start creation');
    } catch (e) {
      console.log(e);
      actions.general.setError({ isError: true, description: e.message });
    }
  },
);
