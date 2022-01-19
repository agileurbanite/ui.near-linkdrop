import { Button } from '@material-ui/core';
import { DeleteForeverOutlined } from '@material-ui/icons';
import { formatNearBalance } from '../../../../../../utils/format';
import { useStyles } from './Start.styles';

export const Start = ({ campaignName, onStartDeleting, balance, walletUserId }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <DeleteForeverOutlined className={classes.icon} />
      <h1 className={classes.header}>
        Are you sure to delete <br />
        <span>{campaignName}</span>?
      </h1>
      <p className={classes.text}>
        This operation cannot be undone. <br />
        All campaign links stats will be lost.
      </p>
      <p className={classes.text}>
        After deleting ~<span>{formatNearBalance(balance.total)}</span> <br />
        will be sent back to your wallet account <br />
        <span>{walletUserId}</span>
      </p>
      <Button
        color="secondary"
        variant="contained"
        onClick={onStartDeleting}
        className={classes.deleteButton}
      >
        Delete Campaign
      </Button>
    </div>
  );
};
