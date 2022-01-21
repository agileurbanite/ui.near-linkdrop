import { Button } from '@material-ui/core';
import { useStoreActions } from 'easy-peasy';
import { Token } from './Token/Token';
import { useJss } from './Collection.jss';

export const Collection = ({ collection }) => {
  const { collectionId, metadata, tokens } = collection;
  const loadMoreNft = useStoreActions((a) => a.campaigns.createCampaign.loadMoreNft);
  const switchNftSelection = useStoreActions((a) => a.campaigns.createCampaign.switchNftSelection);
  const jss = useJss();

  const loadMore = () => loadMoreNft({ collectionId });

  return (
    <div className={jss.container}>
      <div className={jss.topbar}>
        <p>{metadata.name}</p>
        <img src={metadata.icon} alt="collection icon" className={jss.icon} />
      </div>
      <div className={jss.tokens}>
        {tokens.list.map((tokenId) => (
          <Token
            key={tokenId}
            token={tokens.map[tokenId]}
            collectionId={collectionId}
            switchNftSelection={switchNftSelection}
          />
        ))}
      </div>
      <Button variant="contained" onClick={loadMore}>
        Load more NFT
      </Button>
    </div>
  );
};
