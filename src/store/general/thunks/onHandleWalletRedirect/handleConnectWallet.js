import { routes } from '../../../../ui/config/routes';

export const handleConnectWallet = async ({
  actions,
  queryParams: { account_id, error },
  replace,
}) => {
  if (account_id) {
    // TODO check if profile exist
    console.log(account_id);
    replace(routes.createAccount);
    // or redirect to login account if not
    return;
  }

  if (error) {
    actions.general.setError({
      isError: true,
      description: 'You have not connected your wallet',
    });
  }
};
