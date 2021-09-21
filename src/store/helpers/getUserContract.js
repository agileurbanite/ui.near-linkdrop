import { Account } from 'near-api-js';
import { Contract } from '../../near/api/Сontract';

export const getUserContract = (state, userId) =>
  new Contract(new Account(state.general.entities.near.connection, userId), userId, {
    viewMethods: ['get_campaigns', 'get_user_metadata'],
    changeMethods: ['create_near_campaign'],
  });
