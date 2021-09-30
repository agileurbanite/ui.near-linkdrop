import ky from 'ky';
import { nearConfig } from '../../../../config/nearConfig';

export const getAccountIdsByPublicKey = (key) =>
  ky.get(`${nearConfig.helperUrl}/publicKey/${key}/accounts`, { timeout: 30000 }).json();
