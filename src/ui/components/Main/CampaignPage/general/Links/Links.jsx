import { useStoreState } from 'easy-peasy';
import { useStyles } from './Links.styles';
import { QrModal } from '../QrModal/QrModal';
import { Pagination } from '../Pagination/Pagination';

export const Links = ({ campaign: { campaignId, keys, tokensPerKey, qr }, Link }) => {
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
