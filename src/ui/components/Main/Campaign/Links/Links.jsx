import { useStoreState } from 'easy-peasy';
import { KeysStatistic } from './KeysStatistic/KeysStatistic';
import { Link } from './Link/Link';
import { Topbar } from './Topbar/Topbar';
import { Pagination } from './Pagination/Pagination';
import { useLinkSelector } from './useLinkSelector';
import { useStyles } from './Links.styles';

export const Links = ({ campaign: { campaignId, keys, name, tokensPerKey, keysStats } }) => {
  const walletUserId = useStoreState(state => state.general.user.wallet.accountId);
  const { numberOfSelected, isSelectedAll, allLinks, onSelectAll, onSelect } =
    useLinkSelector(keys);

  const classes = useStyles();

  return (
    <>
      <KeysStatistic keysStats={keysStats} />
      <div className={classes.container}>
        <Topbar
          numberOfSelected={numberOfSelected}
          isSelectedAll={isSelectedAll}
          onSelectAll={onSelectAll}
          allLinks={allLinks}
          keys={keys}
          name={name}
        />
        {keys.map((key) => (
          <Link
            key={key.pk}
            link={key}
            onSelect={onSelect}
            isSelected={allLinks[key.pk]}
            tokensPerKey={tokensPerKey}
            campaignId={campaignId}
            walletUserId={walletUserId}
          />
        ))}
        <Pagination />
      </div>
    </>
  );
};
