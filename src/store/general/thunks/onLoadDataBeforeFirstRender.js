import { thunk } from 'easy-peasy';
import { getDataBeforeRenderPage } from './helpers/getDataBeforeRenderPage';

export const onLoadDataBeforeFirstRender = thunk(async (_, history, { getStoreActions }) => {
  const actions = getStoreActions();

  await getDataBeforeRenderPage({
    actions,
    history,
    withLoading: false,
  });
});
