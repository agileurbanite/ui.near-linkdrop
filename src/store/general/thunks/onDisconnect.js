import { thunk } from 'easy-peasy';
import { routes } from '../../../config/routes';
import { getNearPack } from '../helpers/getNearPack';

export const onDisconnect = thunk(async (_, history, { getStoreActions }) => {
  const actions = getStoreActions();
  const resetState = actions.resetState;
  const setNearPack = actions.general.setNearPack;

  localStorage.clear();
  resetState();
  history.replace(routes.connectWallet);
  setNearPack(await getNearPack());
});
