import { Navigation } from './Navigation/Navigation';
import { useStyles } from './Sidebar.styles';

export const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Navigation />
    </div>
  );
};
