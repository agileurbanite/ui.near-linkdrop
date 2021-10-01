import { Button, Typography } from '@material-ui/core';
import { useStoreState } from 'easy-peasy';
import { useState } from 'react';
import { Confirmation } from './Confirmation/Confirmation';
import { emoji } from '../../../../config/emoji';
import { useStyles } from './DeleteUser.styles';

export const DeleteUser = () => {
  const hasCampaigns = useStoreState((state) => state.settings.hasCampaigns);
  const [isOpen, setOpen] = useState(false);
  const classes = useStyles();

  const onOpen = () => setOpen(true);

  return (
    <div className={classes.container}>
      <span className={classes.emoji}>{emoji.manFrowning}</span>
      <Typography variant="h1" color="textPrimary" className={classes.header}>
        Delete Account
      </Typography>
      <Typography variant="body1" color="textSecondary" className={classes.description}>
        {hasCampaigns
          ? `You can't delete your Linkdrop account until you delete all campaigns manually`
          : `This operation can't be undone`}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={onOpen}
        className={classes.button}
        disabled={hasCampaigns}
      >
        Delete Account
      </Button>
      <Confirmation isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};
