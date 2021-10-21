import { CopyToClipboard } from '../../../../general/CopyToClipboard/CopyToClipboard';
import { RefundLink } from './RefundLink/RefundLink';
import { Qr } from './Qr/Qr';
import { Status } from './Status/Status';
import { nearConfig } from '../../../../../../config/nearConfig';
import { keyStatus } from '../../../../../../config/keyStatus';
import { useStyles } from './Link.styles';

export const Link = ({
  campaignId,
  link: { pk, sk, order, status },
  tokensPerKey,
  walletUserId,
}) => {
  const classes = useStyles();
  const isActive = status === keyStatus.active;

  const link = nearConfig.getCreateAccountAndClaimLink(sk, campaignId);

  return (
    <div className={classes.container}>
      <span className={classes.order}>#{order}</span>
      <span className={classes.publicKey}>{pk}</span>
      <Status status={status} />
      {isActive && (
        <>
          <Qr link={link} />
          <RefundLink
            pk={pk}
            campaignId={campaignId}
            tokensPerKey={tokensPerKey}
            walletUserId={walletUserId}
          />
          <CopyToClipboard
            classNames={{
              iconButton: classes.copyButton,
              icon: classes.copyButtonIcon,
            }}
            value={link}
          />
        </>
      )}
    </div>
  );
};
