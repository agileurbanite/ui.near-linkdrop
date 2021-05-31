import { thunk } from 'easy-peasy';
import { routes } from '../../../ui/config/routes';

export const onCreateAccount = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const store = getStoreState();
  const wallet = store.general.entities.wallet;
  const actions = getStoreActions();
  const connectToWallet = actions.general.connectToWallet;


});
