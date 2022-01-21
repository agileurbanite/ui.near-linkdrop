import { Button } from '@material-ui/core';
import { useJss } from './Token.jss';

export const Token = ({ token, collectionId, switchNftSelection }) => {
  const { tokenId, selected } = token;
  const { title, media } = token.metadata;
  const jss = useJss({ selected });

  const switchSelection = () => switchNftSelection({ tokenId, collectionId, selected: !selected });

  return (
    <div className={jss.container}>
      <p>{title}</p>
      <img src={media} className={jss.media} alt="NFT" />
      <Button variant="outlined" className={jss.select} onClick={switchSelection}>
        {selected ? 'Unselect' : 'Select'}
      </Button>
    </div>
  );
};
