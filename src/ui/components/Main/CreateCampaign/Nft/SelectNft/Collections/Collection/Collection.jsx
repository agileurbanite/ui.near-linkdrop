import { Token } from './Token/Token';
import { useJss } from './Collection.jss';

export const Collection = ({ collection }) => {
  const { metadata, tokens } = collection;
  const jss = useJss();

  return (
    <div className={jss.container}>
      <div className={jss.topbar}>
        <p>{metadata.name}</p>
        <img src={metadata.icon} alt="collection icon" className={jss.icon} />
      </div>
      <div className={jss.tokens}>
        {tokens.map((token) => (
          <Token key={token.tokenId} token={token} />
        ))}
      </div>
    </div>
  );
};
