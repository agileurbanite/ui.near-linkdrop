import { useStoreState } from 'easy-peasy';
import { Collection } from './Collection/Collection';
import { useJss } from './Collections.jss';

export const Collections = () => {
  const collections = useStoreState((s) => s.campaigns.createCampaign.nft.collections)
  const jss = useJss();

  return (
    <div className={jss.container}>
      {collections.list.map((collectionId) => (
        <Collection key={collectionId} collection={collections.map[collectionId]} />
      ))}
    </div>
  );
};
