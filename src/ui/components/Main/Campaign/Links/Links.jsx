import { Link } from './Link/Link';
import { useStyles } from './Links.styles';

export const Links = ({ campaign: { links } }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.topbar}>Links</div>
      {links.map((link) => (
        <Link key={link.publicKey} link={link} />
      ))}
    </div>
  );
};
