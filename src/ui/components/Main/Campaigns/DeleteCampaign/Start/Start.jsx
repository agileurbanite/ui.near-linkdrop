import { Button } from '@material-ui/core';
import { DeleteForeverOutlined } from '@material-ui/icons';
import { useStyles } from './Start.styles';

export const Start = ({ campaignName, onStartDeleting }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <DeleteForeverOutlined className={classes.icon} />
      <h1 className={classes.header}>
        Are you sure to delete <br />
        <span>{campaignName}</span>?
      </h1>
      <p className={classes.mainText}>
        This operation cannot be undone and and will cause all link statistics to be lost
      </p>
      <p className={classes.mainText}>
        After deleting <span>24.14 NEAR</span> <br />
        will be sent back to your wallet account <br />
        <span>eclipseer.testnet</span>
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
