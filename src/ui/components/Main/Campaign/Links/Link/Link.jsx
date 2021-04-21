import { Checkbox } from '@material-ui/core';
import { CopyToClipboard } from '../../../../general/CopyToClipboard/CopyToClipboard';
import { CancelLink } from './CancelLink/CancelLink';
import { config } from '../../../../../../near/config';
import { useStyles } from './Link.styles';

export const Link = ({
  amountPerLink,
  link: { publicKey, secretKey, order, isActive },
  onSelect,
  isSelected,
}) => {
  const classes = useStyles(isActive);

  return (
    <div className={classes.container}>
      <Checkbox
        onChange={(e) => onSelect(publicKey, e.target.checked)}
        className={classes.checkbox}
        color="primary"
        checked={isSelected}
      />
      <span className={classes.order}>#{order}</span>
      <span className={classes.publicKey}>{publicKey}</span>
      {isActive && (
        <CancelLink secretKey={secretKey} amountPerLink={amountPerLink} />
      )}
      <CopyToClipboard
        classNames={{ iconButton: classes.copyButton }}
        value={config.getCreateAccountAndClaimLink(secretKey)}
      />
    </div>
  );
};
