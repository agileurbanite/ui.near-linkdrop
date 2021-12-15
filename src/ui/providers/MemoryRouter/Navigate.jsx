import { useStoreActions } from 'easy-peasy';
import { cloneElement } from 'react';

export const Navigate = ({ to, children }) => {
  const navigate = useStoreActions((actions) => actions.navigation.navigate);

  return cloneElement(children, {
    onClick: () => navigate({ to }),
  });
};
