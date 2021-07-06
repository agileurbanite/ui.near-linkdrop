import { Checkbox } from '@material-ui/core';
import { CopyToClipboard } from '../../../../general/CopyToClipboard/CopyToClipboard';
import { CancelLink } from './CancelLink/CancelLink';
import { config } from '../../../../../../near/config';
import { useStyles } from './Link.styles';

export const Link = ({
  amountPerLink,
  campaignId,
  link: { pk, sk, order, status },
  onSelect,
  isSelected,
}) => {
  const classes = useStyles();

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
      {/*{isActive && (*/}
      {/*  <CancelLink secretKey={sk} amountPerLink={amountPerLink} />*/}
      {/*)}*/}
      <CopyToClipboard
        classNames={{ iconButton: classes.copyButton }}
        value={config.getCreateAccountAndClaimLink(sk, campaignId)}
      />
    </div>
  );
};
