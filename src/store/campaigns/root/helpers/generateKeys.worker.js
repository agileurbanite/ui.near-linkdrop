import { mnemonicToSeed } from 'bip39-light';
import bs58 from 'bs58';
import { derivePath } from 'ed25519-hd-key';
import nacl from 'tweetnacl';

const getPath = (campaignId, keyId) => `m/44'/397'/0'/${campaignId}'/${keyId}'`;

const createGenerateKey = (seedPhrase) => {
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

const generateKeys = ({ mnemonic, start, end, internalCampaignId }) => {
  const generateKey = createGenerateKey(mnemonic);
  const keysAmount = end - start + 1; // We want to include the last elem

  return Array(keysAmount)
    .fill(0)
    .map((_, index) => ({
      ...generateKey(internalCampaignId, start + index),
      order: start + index,
    }));
};

onmessage = ({ data }) => {
  postMessage(generateKeys(data));
};
