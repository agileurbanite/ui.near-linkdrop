import { thunk } from 'easy-peasy';
import { CsvBuilder } from 'filefy';
import { nearConfig } from '../../../config/nearConfig';

export const onExportLinksCSV = thunk((_, payload) => {
  const { allLinks, links, name } = payload;

  const selectedLinks = Object.entries(allLinks)
    .filter(([, value]) => value)
    .reduce((acc, [key]) => {
      acc[key] = true;
      return acc;
    }, {});

  const csvBuilder = new CsvBuilder(`${name}.csv`).setColumns(['public_key', 'link']);

  links.forEach(({ publicKey, secretKey }) => {
    if (!selectedLinks[publicKey]) return;
    csvBuilder.addRow([publicKey, nearConfig.getCreateAccountAndClaimLink(secretKey)]);
  });

  csvBuilder.exportFile();
});
