/* eslint-disable */
import { createGenerateKey } from '../campaigns/helpers/createGenerateKey';

export const generateKeysFromSeed = (amount) => {
  const generateKey = createGenerateKey(
    'sketch finger viable mobile fluid pilot hope nation middle limit work medal',
  );

  const allKeys = Array(amount)
    .fill(0)
    .map((i, index) => generateKey(1, index + 1).pk);

  console.log(allKeys);
};

generateKeysFromSeed(50);
