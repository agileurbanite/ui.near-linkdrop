import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect } from 'react';

export const Routes = ({ children, defaultRoute }) => {
  const path = useStoreState((state) => state.navigation.path);
  const navigate = useStoreActions((actions) => actions.navigation.navigate);

  useEffect(() => {
    if (defaultRoute) navigate({ to: defaultRoute });
  }, []);

  if (Array.isArray(children)) {
    return children.filter((child) => path.includes(child.props.path));
  }

  return path.includes(children.props.path) ? children : null;
};
