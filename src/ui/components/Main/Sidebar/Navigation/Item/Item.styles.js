import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    height: 40,
    display: 'flex',
    alignItems: 'center',
    margin: '18px 0',
    borderRadius: 8,
    color: ({ isActive }) => (isActive ? theme.palette.primary.main : theme.colors.dashboardGrey),
    backgroundColor: ({ isActive }) => (isActive ? '#ebeefd' : 'transparent'),
  },
  icon: {
    height: 24,
    width: 24,
    fill: ({ isActive }) => (isActive ? theme.palette.primary.main : theme.colors.dashboardGrey),
    marginLeft: 12,
  },
  name: {
    marginLeft: 24,
  },
});

export const useStyles = makeStyles(styles, { name: 'Item' });
