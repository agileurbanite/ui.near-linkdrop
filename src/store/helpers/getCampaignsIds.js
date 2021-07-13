export const getCampaignsIds = (accountIds, linkdropUserId) =>
  accountIds.filter(
    (accountId) => accountId !== linkdropUserId && accountId.includes(linkdropUserId),
  );
