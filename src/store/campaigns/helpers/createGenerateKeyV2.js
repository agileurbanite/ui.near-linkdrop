import { mnemonicToSeedHex } from 'bip39-light';
import bs58 from 'bs58';
import { derivePath } from 'ed25519-hd-key';
import nacl from 'tweetnacl';

export const createGenerateKeyV2 = (seedPhrase, password) => {
  const seed = mnemonicToSeedHex(seedPhrase, password);

  return (keyIndex) => {
    const { key } = derivePath(`m/44'/397'/0'/0'/${keyIndex}'`, seed);
    const keyPair = nacl.sign.keyPair.fromSeed(key);
    return {
      publicKey: `ed25519:${bs58.encode(Buffer.from(keyPair.publicKey))}`,
      secretKey: `ed25519:${bs58.encode(Buffer.from(keyPair.secretKey))}`,
    };
  };
};
