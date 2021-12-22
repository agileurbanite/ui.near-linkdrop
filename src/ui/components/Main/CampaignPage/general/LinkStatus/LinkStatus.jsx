import { useStyles } from './LinkStatus.styles';

export const LinkStatus = ({ status }) => {
  const classes = useStyles({ status });
  return <div className={classes.container} />;
};
