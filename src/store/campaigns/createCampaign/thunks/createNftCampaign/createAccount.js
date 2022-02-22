import {
  addKey,
  createAccount as createAccountTx,
  deployContract,
  fullAccessKey,
  functionCall,
  transfer,
} from 'near-api-js/lib/transaction';
import { PublicKey } from 'near-api-js/lib/utils';
import { getUserContract } from '../../../../helpers/getContracts';
import { setKeyToKeyStore } from '../../../../helpers/setKeyToKeyStore';
import { terraGas } from '../../../../helpers/terraGas';

const getCollectionsWhitelist = (tokens) =>
  Array.from(
    tokens.reduce((acc, [collectionId]) => {
      acc.add(collectionId);
      return acc;
    }, new Set()),
  );

const getRedirectUrl = (linkRedirectUrl) =>
  linkRedirectUrl.length > 0 ? linkRedirectUrl : undefined;

export const createAccount = async (
  state,
  near,
  linkdrop,
  campaignId,
  deposit,
  linkRedirectUrl,
  tokens,
) => {
  try {
    const userAccount = await near.account(linkdrop.accountId);
    const wasm = await fetch('wasm/nft_campaign.wasm')
      .then((r) => r.arrayBuffer())
      .then((r) => new Uint8Array(r));

    await userAccount.signAndSendTransaction(campaignId, [
      createAccountTx(),
      transfer(deposit),
      addKey(PublicKey.from(linkdrop.publicKey), fullAccessKey()),
      deployContract(wasm),
      functionCall(
        'new',
        {
          total: tokens.length,
          collections_whitelist: getCollectionsWhitelist(tokens),
          redirect_url: getRedirectUrl(linkRedirectUrl),
        },
        terraGas(50),
        0,
      ),
    ]);

    await getUserContract(state, linkdrop.accountId).add_campaign_to_list({
      args: { campaign_id: campaignId },
    });

    await setKeyToKeyStore(near.config.keyStore, campaignId, linkdrop.secretKey);
  } catch (e) {
    /* eslint-disable no-console */
    console.log(e);
  }
};
