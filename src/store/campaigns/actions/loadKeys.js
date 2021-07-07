import { action } from 'easy-peasy';

export const loadKeys = action((slice, payload) => {
  const { keys, keyStats, pagination } = payload;

  slice.campaign.pagination = pagination;
  slice.campaign.keys = keys.map((key, index) => ({
    ...key,
    status: keyStats[index].status.toLowerCase(),
  }));
});
