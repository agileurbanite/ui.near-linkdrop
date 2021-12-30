import { thunk } from 'easy-peasy';

export const onLoadQr = thunk(async (_, payload, { getStoreState, getStoreActions }) => {
  const { order, button, showLoader, hideLoader } = payload;

  const state = getStoreState();
  const pagination = state.campaigns.campaign.pagination;
  const actions = getStoreActions();
  const onLoadKeys = actions.campaigns.onLoadKeys;
  const nextLink = actions.campaigns.openNextLink;
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
    button === 'prev' ? prevLink({ order }) : nextLink({ order });
  };

  if (order === range.start && button === 'prev') {
    await updatePage(page - 1);
  } else if (order === range.end && button === 'next') {
    await updatePage(page + 1);
  } else {
    button === 'prev' ? prevLink({ order }) : nextLink({ order });
  }
});
