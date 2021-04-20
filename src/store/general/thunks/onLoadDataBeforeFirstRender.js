import { thunk } from 'easy-peasy';
import { getDataBeforeRenderPage } from './helpers/getDataBeforeRenderPage';

export const onLoadDataBeforeFirstRender = thunk(async (_, history, { getStoreActions }) => {
  const actions = getStoreActions();
  const onLoadAccountBalance = actions.general.onLoadAccountBalance;

  await Promise.all([
    onLoadAccountBalance(),
    getDataBeforeRenderPage({
      actions,
      history,
      withLoading: false,
      shouldLoadAccountBalance: false,
    }),
  ]);
});
