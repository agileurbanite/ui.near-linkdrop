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
  menu: {
    width: 250,
    marginRight: 16,
    marginLeft: 16,
  },
});

export const useStyles = makeStyles(styles, { name: 'Sidebar' });
