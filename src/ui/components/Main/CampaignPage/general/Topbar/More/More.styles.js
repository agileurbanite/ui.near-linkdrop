import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  button: {
    gridArea: 'x',
    padding: 0,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  moreIcon: {
    height: 25,
    width: 25,
  },
  popover: {
    borderRadius: 10,
  },
  container: {
    width: 178,
    userSelect: 'none',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20,
    padding: '16px 0',
  },
  exportCsv: {
    color: theme.palette.primary.main,
  },
  deleteCampaign: {
    color: theme.colors.red,
  },
});

export const useStyles = makeStyles(styles, { name: 'More' });
