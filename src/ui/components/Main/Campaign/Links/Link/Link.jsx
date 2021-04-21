import { IconButton, Checkbox } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import { useStoreActions } from 'easy-peasy';
import { CopyToClipboard } from '../../../../general/CopyToClipboard/CopyToClipboard';
import { config } from '../../../../../../near/config';
import { useStyles } from './Link.styles';

export const Link = ({ link: { publicKey, secretKey, order, isActive }, onSelect, isSelected }) => {
  const onCancelLink = useStoreActions((actions) => actions.campaigns.onCancelLink);
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
      <IconButton onClick={() => onCancelLink(secretKey)} className={classes.cancel}>
        <Cancel />
      </IconButton>
      <CopyToClipboard
        classNames={{ iconButton: classes.copyButton }}
        value={config.getCreateAccountAndClaimLink(secretKey)}
      />
    </div>
  );
};
