import { CopyToClipboard } from '../../../../general/CopyToClipboard/CopyToClipboard';
import { config } from '../../../../../../near/config';
import { useStyles } from './Link.styles';

export const Link = ({ link: { publicKey, secretKey, order } }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span className={classes.order}>#{order}</span>
      <span className={classes.publicKey}>{publicKey}</span>
      <CopyToClipboard
        classNames={{ iconButton: classes.copyButton }}
        value={config.getCreateAccountAndClaimLink(secretKey)}
      />
    </div>
  );
};
