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
});

export const useStyles = makeStyles(styles, { name: 'Sidebar' });
