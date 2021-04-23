import { action } from 'easy-peasy';

export const addNotification = action((state, payload) => {
  state.notifications[payload[0]] = payload[1];
});
