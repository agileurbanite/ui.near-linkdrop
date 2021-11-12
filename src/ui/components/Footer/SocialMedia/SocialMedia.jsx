import { useStyles } from './SocialMedia.styles';

export const SocialMedia = ({ icon: Icon, name, href }) => {
  const classes = useStyles();

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className={classes.container}>
        <Icon />
        <span className={classes.name}>{name}</span>
      </div>
    </a>
  );
};
