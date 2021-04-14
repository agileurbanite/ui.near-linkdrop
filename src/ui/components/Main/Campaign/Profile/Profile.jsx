import { useStyles } from './Profile.styles';

export const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p>Profile</p>
    </div>
  );
};
