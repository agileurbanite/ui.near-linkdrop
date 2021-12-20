import { useStoreActions } from 'easy-peasy';
import { cloneElement } from 'react';

export const Navigate = ({ children, to, beforeHook }) => {
  const navigate = useStoreActions((actions) => actions.navigation.navigate);

  const onClick = async () => {
    if (beforeHook) await beforeHook();
    navigate({ to });
  };

  return cloneElement(children, { onClick });
};
