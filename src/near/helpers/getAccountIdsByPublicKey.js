import ky from 'ky';
import { config } from '../config';

export const getAccountIdsByPublicKey = (key) =>
  ky.get(`${config.helperUrl}/publicKey/${key}/accounts`, { timeout: 30000 }).json();
