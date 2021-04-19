import { useStyles } from './MenuItem.styles';

export const MenuItem = ({ icon, text, onClick }) => {
  const classes = useStyles();
  const Icon = icon;

  return (
    <button className={classes.container} type="button" onClick={onClick}>
      <Icon className={classes.icon} />
      <span className={classes.text}>{text}</span>
    </button>
  );
};
