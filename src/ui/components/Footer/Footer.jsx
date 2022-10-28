import cn from 'classnames';
import { Twitter, Telegram, GitHub } from '@material-ui/icons';
import { SocialMedia } from './SocialMedia/SocialMedia';
import { socialMedia } from '../../../config/references';
import { useStyles } from './Footer.styles';

export const Footer = ({ classNames }) => {
  const classes = useStyles();
  return (
    <div className={cn(classes.container, classNames?.container)}>
      <span className={classes.text}>©2022 NEARDROP</span>
      <SocialMedia icon={GitHub} name="GitHub" href={socialMedia.gitHub} />
    </div>
  );
};
