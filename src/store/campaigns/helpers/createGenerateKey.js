import { mnemonicToSeed } from 'bip39-light';
import bs58 from 'bs58';
import { derivePath } from 'ed25519-hd-key';
import nacl from 'tweetnacl';

const getPath = (campaignId, keyId) => `m/${campaignId}'/${keyId}'`;

export const createGenerateKey = (seedPhrase) => {
  const seed = mnemonicToSeed(seedPhrase);
  return (campaignId, keyId) => {
    const { key } = derivePath(getPath(campaignId, keyId), seed.toString('hex'));
    const keyPair = nacl.sign.keyPair.fromSeed(key);

    return {
      pk: bs58.encode(Buffer.from(keyPair.publicKey)),
      sk: bs58.encode(Buffer.from(keyPair.secretKey)),
    };
  };
};
