import { useState } from 'react';

export const useLinkSelector = (links) => {
  const selectAllLinks = (isSelected) =>
    links.reduce((acc, { pk }) => {
      acc[pk] = isSelected;
      return acc;
    }, {});

  const [allLinks, setSelectedLink] = useState(selectAllLinks(false));

  const onSelectAll = (isSelected) => setSelectedLink(selectAllLinks(isSelected));

  const onSelect = (pk, isSelected) =>
    setSelectedLink((prevState) => ({ ...prevState, [pk]: isSelected }));

  const numberOfSelected = Object.values(allLinks).filter((value) => value).length;

  return {
    numberOfSelected,
    isSelectedAll:  numberOfSelected=== links.length,
    allLinks,
    onSelectAll,
    onSelect,
  };
};
