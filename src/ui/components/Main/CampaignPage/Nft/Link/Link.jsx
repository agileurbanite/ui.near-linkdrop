import { useStyles } from './Link.styles';
import { keyStatus } from '../../../../../../config/keyStatus';
import { nearConfig } from '../../../../../../config/nearConfig';
import { LinkStatus } from '../../general/LinkStatus/LinkStatus';
import { CopyToClipboard } from '../../../../general/CopyToClipboard/CopyToClipboard';
import { Qr } from '../../general/Actions/Qr/Qr';
import { RefundLink } from '../../general/Actions/RefundLink/RefundLink';
import { Nft } from '../../general/Actions/Nft/Nft';

export const Link = ({
  link: { pk, sk, order, status },
  tokensPerKey,
  campaignId,
  walletUserId,
}) => {
  const classes = useStyles();
  const isActive = status === keyStatus.active;
  const link = nearConfig.getCreateAccountAndClaimLink(sk, campaignId);

  return (
    <div className={classes.container}>
      <div className={classes.statusBar}>
        <LinkStatus status={status} />
        <span>#{order}</span>
      </div>

      {isActive && (
        <div className={classes.actions}>
          <Nft order={order} sk={sk} campaignId={campaignId} />
          <CopyToClipboard
            classNames={{
              icon: classes.copyButtonIcon,
              tooltip: classes.tooltip,
              copyButton: classes.copyButton,
            }}
            value={link}
          />
          <Qr order={order} sk={sk} campaignId={campaignId} />
          <RefundLink
            pk={pk}
            campaignId={campaignId}
            tokensPerKey={tokensPerKey}
            walletUserId={walletUserId}
          />
        </div>
      )}
    </div>
  );
};
