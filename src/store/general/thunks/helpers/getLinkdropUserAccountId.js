import { config } from '../../../../near/config';
import { getAccountName } from '../../../helpers/getAccountName';

export const getLinkdropUserAccountId = (accountId) =>
  `${getAccountName(accountId)}.${config.accounts.linkdrop}`;
