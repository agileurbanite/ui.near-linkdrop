// TODO remove and replace with getChunksRange
export const getPagesRange = (total, elementsPerPage) => ({
  firstPage: 1,
  lastPage: Math.trunc(total / elementsPerPage) + (total % elementsPerPage ? 1 : 0),
});

// TODO remove and replace with getChunkElementsRange
export const getPagination = ({ page, total, elementsPerPage = 50 }) => {
  const startIndex = 1;
  const { firstPage, lastPage } = getPagesRange(total, elementsPerPage);

  if (page < firstPage || page > lastPage) {
    throw new Error(`Page should be in range (${firstPage},${lastPage}), got ${page}`);
  }

  const start = startIndex + (page - 1) * elementsPerPage;
  const end = Math.min(start - 1 + elementsPerPage, total);

  return {
    page,
    total,
    elementsPerPage,
    range: { start, end },
  };
};
