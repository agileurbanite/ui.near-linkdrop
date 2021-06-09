export const isAccountExist = async (near, accountId) => {
  try {
    await near.connection.provider.query({
      request_type: 'view_account',
      finality: 'final',
      account_id: accountId,
    });
    return true;
  } catch (e) {
    return false;
  }
};
