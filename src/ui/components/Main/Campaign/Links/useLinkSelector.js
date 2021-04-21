import { useState } from 'react';

export const useLinkSelector = (links) => {
  const selectAllLinks = (isSelected) =>
    links.reduce((acc, { publicKey }) => {
      acc[publicKey] = isSelected;
      return acc;
    }, {});

  const [allLinks, setSelectedLink] = useState(selectAllLinks(false));

  const onSelectAll = (isSelected) => setSelectedLink(selectAllLinks(isSelected));

  const onSelect = (publicKey, isSelected) =>
    setSelectedLink((prevState) => ({ ...prevState, [publicKey]: isSelected }));

  const numberOfSelected = Object.values(allLinks).filter((value) => value).length;

  return {
    numberOfSelected,
    isSelectedAll:  numberOfSelected=== links.length,
    allLinks,
    onSelectAll,
    onSelect,
  };
};
