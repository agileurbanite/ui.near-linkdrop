import { useStoreState } from 'easy-peasy';
import { Collection } from './Collection/Collection';
import { useJss } from './Collections.jss';

export const Collections = () => {
  const collections = useStoreState((state) => state.campaigns.createCampaign.nft.collections);
  const jss = useJss();

  return (
    <div className={jss.container}>
      <h2>Collections</h2>
      {collections.map((collection) => (
        <Collection key={collection.collectionId} collection={collection} />
      ))}
    </div>
  );
};
