const getPagesRange = (total, elementsPerPage) => ({
  firstPage: 1,
  lastPage: Math.trunc(total / elementsPerPage) + (total % elementsPerPage ? 1 : 0),
});

export const getKeysRange = ({ page, total, keysPerPage = 50 }) => {
  const startIndex = 1;
  const { firstPage, lastPage } = getPagesRange(total, keysPerPage);

  if (page < firstPage || page > lastPage) {
    throw new Error(`Page should be in range (${firstPage},${lastPage}), got ${page}`);
  }

  const start = startIndex + (page - 1) * keysPerPage;
  const end = Math.min(start - 1 + keysPerPage, total);
  return { start, end };
};
