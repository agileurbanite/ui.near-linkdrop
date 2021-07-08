import { Checkbox } from '@material-ui/core';
import { CopyToClipboard } from '../../../../general/CopyToClipboard/CopyToClipboard';
import { Refund } from './Refund/Refund';
import { Status } from './Status/Status';
import { config } from '../../../../../../near/config';
import { useStyles } from './Link.styles';

export const Link = ({ campaignId, link: { pk, sk, order, status }, onSelect, isSelected }) => {
  const classes = useStyles();
  const isActive = status === 'active';

  return (
    <div className={classes.container}>
      <Checkbox
        onChange={(e) => onSelect(pk, e.target.checked)}
        className={classes.checkbox}
        color="primary"
        checked={isSelected}
      />
      <span className={classes.order}>#{order}</span>
      <span className={classes.publicKey}>{pk}</span>
      <Status status={status} />
      {isActive && <Refund secretKey={sk} />}
      <CopyToClipboard
        classNames={{ iconButton: classes.copyButton }}
        value={config.getCreateAccountAndClaimLink(sk, campaignId)}
      />
    </div>
  );
};
