import { config } from '../../../../near/config';
import { getAccountName } from '../../../utils/getAccountName';

export const getLinkdropUserAccountId = (accountId) =>
  `${getAccountName(accountId)}.${config.accounts.linkdrop}`;
