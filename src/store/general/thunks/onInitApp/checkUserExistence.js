export const checkUserExistence = (state) => {
  const user = state.general.user;

  if (!user.currentAccount) return;
  // Check if wallet and linkdrop accounts still exist
  console.log(user.currentAccount);
}
