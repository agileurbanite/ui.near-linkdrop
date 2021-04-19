import { IconButton } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import { useStoreActions } from 'easy-peasy';
import { CopyToClipboard } from '../../../../general/CopyToClipboard/CopyToClipboard';
import { config } from '../../../../../../near/config';
import { useStyles } from './Link.styles';

export const Link = ({ link: { publicKey, secretKey, order, isActive } }) => {
  const onCancelLink = useStoreActions((actions) => actions.campaigns.onCancelLink);
  const classes = useStyles(isActive);

  const onClick = () => onCancelLink(secretKey);

  return (
    <div className={classes.container}>
      <span className={classes.order}>#{order}</span>
      <span className={classes.publicKey}>{publicKey}</span>
      <IconButton className={classes.cancel} onClick={onClick}>
        <Cancel />
      </IconButton>
      <CopyToClipboard
        classNames={{ iconButton: classes.copyButton }}
        value={config.getCreateAccountAndClaimLink(secretKey)}
      />
    </div>
  );
};
