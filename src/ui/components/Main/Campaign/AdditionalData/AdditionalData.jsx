import { Divider } from '@material-ui/core';
import { getTime } from '../../../../utils/formatCampaignData';
import { formatNearBalance } from '../../../../utils/format';
import { useStyles } from './AdditionalData.styles';

export const AdditionalData = ({ campaign }) => {
  const classes = useStyles();
  const { amountPerLink, createdAt } = campaign;

  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <span className={classes.label}>Each link contains</span>
        <span className={classes.value}>{formatNearBalance(amountPerLink)}</span>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.section}>
        <span className={classes.label}>Created</span>
        <span className={classes.value}>{getTime(createdAt)}</span>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.section}>
        <span className={classes.label}>Status</span>
        <span className={classes.statusValue}>Active</span>
      </div>
    </div>
  );
};
