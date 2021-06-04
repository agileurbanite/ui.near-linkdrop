import { cloneElement, useEffect, useState } from 'react';
import { Loader } from './Loader/Loader';

export const Initializer = ({ store, history, children }) => {
  const [isInit, setInit] = useState(false);
  const actions = store.getActions();
  const onInitApp = actions.general.onInitApp;

  // We have to wait until Easy-Peasy will put the data from the local storage
  // (private keys, user account_id etc) into the state
  useEffect(() => {
    (async () => {
      await store.persist.resolveRehydration();
      await onInitApp({ history, setInit });
    })();
  }, [store, history]);

  return isInit ? cloneElement(children, { history }) : <Loader />;
};
