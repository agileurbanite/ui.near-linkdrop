import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    gridArea: 'a',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: '1px solid',
    borderRightColor: theme.colors.dividerOnWhite,
  },
  balance: {
    margin: '32px 0',
    fontWeight: 500,
  },
  createCampaign: {
    padding: '12px 26px',
    marginTop: 32,
  },
  addIcon: {
    marginRight: 12,
  },
  divider: {
    width: 'calc(100% - 30px)',
    backgroundColor: theme.colors.dividerOnWhite,
    marginTop: 24,
  },
});

export const useStyles = makeStyles(styles, { name: 'Sidebar' });
