import { nearConfig } from '../../../../config/nearConfig';
import { getAccountName } from '../../../helpers/getAccountName';

export const getLinkdropUserAccountId = (accountId) =>
  `${getAccountName(accountId)}.${nearConfig.accounts.linkdrop}`;
