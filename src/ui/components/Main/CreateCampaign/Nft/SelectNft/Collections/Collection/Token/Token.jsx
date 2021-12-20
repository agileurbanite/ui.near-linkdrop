import { useJss } from './Token.jss';

export const Token = ({ token }) => {
  const { title, media } = token.metadata;
  const jss = useJss();

  return (
    <div className={jss.container}>
      <p>{title}</p>
      <img src={media} className={jss.media} alt="NFT" />
    </div>
  );
};
