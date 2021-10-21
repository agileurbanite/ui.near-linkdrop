import { useStoreState } from 'easy-peasy';
import { KeysStatistic } from './KeysStatistic/KeysStatistic';
import { Link } from './Link/Link';
import { Topbar } from './Topbar/Topbar';
import { Pagination } from './Pagination/Pagination';
import { useStyles } from './Links.styles';

export const Links = ({ campaign: { campaignId, keys, tokensPerKey, keysStats } }) => {
  const walletUserId = useStoreState((state) => state.general.user.wallet.accountId);
  const classes = useStyles();

  return (
    <>
      <KeysStatistic keysStats={keysStats} />
      <div className={classes.container}>
        <Topbar campaignId={campaignId} />
        {keys.map((key) => (
          <Link
            key={key.pk}
            link={key}
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
