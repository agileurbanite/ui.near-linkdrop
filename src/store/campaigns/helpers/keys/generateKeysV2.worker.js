import { createGetCampaignKeys } from './createGetCampaignKeys';

const generateKeys = ({ mnemonic, start, end, campaignId, createdAt }) => {
  const generateKey = createGetCampaignKeys(mnemonic, campaignId, createdAt);
  const keysAmount = end - start + 1; // We want to include the last elem

  return Array(keysAmount)
    .fill(0)
    .map((_, index) => ({
      ...generateKey(start + index),
      order: start + index,
    }));
};

onmessage = ({ data }) => {
  postMessage(generateKeys(data));
};
