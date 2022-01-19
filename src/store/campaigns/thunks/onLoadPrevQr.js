import { thunk } from 'easy-peasy';

export const onLoadPrevQr = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { order, showLoader, hideLoader } = payload;

  const state = getStoreState();
  const pagination = state.campaigns.campaign.pagination;
  const actions = getStoreActions();
  const onLoadKeys = actions.campaigns.onLoadKeys;
  const prevLink = actions.campaigns.openPrevLink;

  const { page, range, total, elementsPerPage } = pagination;

  const updatePage = async (newPage) => {
    await onLoadKeys({
      page: newPage,
      total,
      elementsPerPage,
      showLoader,
      hideLoader,
    });
    prevLink({ order });
  };

  order === range.start ? await updatePage(page - 1) : prevLink({ order });
});
