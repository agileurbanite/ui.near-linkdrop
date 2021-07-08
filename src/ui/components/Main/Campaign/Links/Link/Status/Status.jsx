import { useStyles } from './Status.styles';

export const Status = ({ status }) => {
  const classes = useStyles({ status });
  return <div className={classes.container}>{status}</div>;
};
