import { Button } from '@material-ui/core';
import { Navigate } from '../../../../../providers/MemoryRouter';
import { useJss } from './Type.jss';

export const Type = ({ type, to }) => {
  const jss = useJss();
  return (
    <Navigate to={to}>
      <div className={jss.container} role="button">
        <div className={jss.imageContainer}>aa</div>
        <span>{type}</span>
      </div>
    </Navigate>

  );
};
