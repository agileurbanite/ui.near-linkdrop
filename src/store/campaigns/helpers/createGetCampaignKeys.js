import { mnemonicToSeedHex } from 'bip39-light';
import bs58 from 'bs58';
import { derivePath } from 'ed25519-hd-key';
import nacl from 'tweetnacl';

/*
  We use campaignId with campaign creation data to be sure that a user always will have a campaign
  with unique keys, even if he will create a new campaign with the same name as he had.
  For example:
    1. alice creates 'my-campaign.alice'
    2. alice deletes 'my-campaign.alice' because it's ended or was compromised
    3. she creates a new one with the same name - my-campaign.alice'.
  In this case, keys of the first and second campaigns won't be the same.
*/

export const createGetCampaignKeys = (seedPhrase, campaignId, createdAt) => {
  const seed = mnemonicToSeedHex(seedPhrase, `${campaignId}${createdAt}`);

  return (keyIndex) => {
    const { key } = derivePath(`m/44'/397'/0'/${keyIndex}'`, seed);
    const keyPair = nacl.sign.keyPair.fromSeed(key);
    return {
      publicKey: `ed25519:${bs58.encode(Buffer.from(keyPair.publicKey))}`,
      secretKey: `ed25519:${bs58.encode(Buffer.from(keyPair.secretKey))}`,
    };
  };
};
