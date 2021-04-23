import { action } from 'easy-peasy';

export const removeNotification = action((state, payload) => {
  delete state.notifications[payload];
});
