import { useStoreState } from 'easy-peasy';
import { useStyles } from './Links.styles';
import { Link } from './Link/Link';
import { Pagination } from '../../general/Pagination/Pagination';
import { QrModal } from '../../general/QrModal/QrModal';

export const Links = ({ campaign: { campaignId, keys, tokensPerKey, qr } }) => {
  const classes = useStyles();
  const walletUserId = useStoreState((state) => state.general.user.wallet.accountId);

  return (
    <div className={classes.container}>
      {keys.map((key) => (
        <Link
          key={key.pk}
          link={key}
          tokensPerKey={tokensPerKey}
          campaignId={campaignId}
          walletUserId={walletUserId}
        />
      ))}
      <QrModal qr={qr} keys={keys} />
      <Pagination />
    </div>
  );
};
