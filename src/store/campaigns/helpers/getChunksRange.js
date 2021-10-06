/*
  Signature: startElement, totalElements, elementsPerChunk -> result
  1, 10, 10 -> (1, 1)
  1, 11, 10 -> (1, 2)
  2, 10, 10 -> (1, 1)
  2, 11, 10 -> (1, 1)
  2, 12, 10 -> (1, 2)
 */
export const getChunksRange = ({ startElement = 1, totalElements, elementsPerChunk }) => {
  const total = totalElements - startElement + 1;
  const lastChunk = Math.trunc(total / elementsPerChunk) + (total % elementsPerChunk ? 1 : 0);
  return { firstChunk: 1, lastChunk };
};

/*
  Signature: startElement, chunkPosition, totalElements, elementsPerChunk -> result
  1, 1, 100, 10 -> (1, 10)
  1, 2, 100, 10 -> (11, 20)
  10, 1, 100, 10 -> (10, 19)
  10, 2, 100, 10 -> (20, 29)
  10, 2, 20, 10 -> (20, 20)
 */
export const getChunkElementsRange = ({
  startElement = 1,
  chunkPosition,
  totalElements,
  elementsPerChunk,
}) => {
  const firstElement = startElement + (chunkPosition - 1) * elementsPerChunk;
  const lastElement = Math.min(firstElement - 1 + elementsPerChunk, totalElements);
  return { firstElement, lastElement };
};
