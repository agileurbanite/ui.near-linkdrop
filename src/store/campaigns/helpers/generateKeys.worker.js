import { createGenerateKey } from './createGenerateKey';

const generateKeys = ({ mnemonic, start, end }) => {
  const generateKey = createGenerateKey(mnemonic);
  const keysAmount = end - start + 1; // We want to include the last elem
  const campaignId = 1; // TODO replace it with real id?

  return Array(keysAmount)
    .fill(0)
    .map((_, index) => ({
      ...generateKey(campaignId, start + index),
      order: start + index,
    }));
};

onmessage = ({ data }) => {
  postMessage(generateKeys(data));
};
