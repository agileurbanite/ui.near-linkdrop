import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect } from 'react';

export const Routes = ({ children, startRoute }) => {
  const path = useStoreState((state) => state.navigation.path);
  const navigate = useStoreActions((actions) => actions.navigation.navigate);

  // TODO maybe we can delete this
  useEffect(() => {
    if (startRoute) navigate({ to: startRoute });
  }, []);

  if (Array.isArray(children)) {
    return children.filter((child) => path.includes(child.props.path));
  }

  return path.includes(children.props.path) ? children : null;
};
