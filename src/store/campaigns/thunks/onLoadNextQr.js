import { thunk } from 'easy-peasy';

export const onLoadNextQr = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { order, showLoader, hideLoader } = payload;

  const state = getStoreState();
  const pagination = state.campaigns.campaign.pagination;
  const actions = getStoreActions();
  const onLoadKeys = actions.campaigns.onLoadKeys;
  const nextLink = actions.campaigns.openNextLink;

  const { page, range, total, elementsPerPage } = pagination;

  const updatePage = async (newPage) => {
    await onLoadKeys({
      page: newPage,
      total,
      elementsPerPage,
      showLoader,
      hideLoader,
    });
    nextLink({ order });
  };

  order === range.end ? await updatePage(page + 1) : nextLink({ order });
});
