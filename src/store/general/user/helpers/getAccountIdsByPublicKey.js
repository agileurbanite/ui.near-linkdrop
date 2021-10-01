import ky from 'ky';
import { nearConfig } from '../../../../config/nearConfig';

// We will use it in the future for restoring access to account
export const getAccountIdsByPublicKey = (key) =>
  ky.get(`${nearConfig.helperUrl}/publicKey/${key}/accounts`, { timeout: 30000 }).json();
