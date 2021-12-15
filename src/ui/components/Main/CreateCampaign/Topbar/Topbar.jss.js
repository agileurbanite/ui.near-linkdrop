import { makeStyles } from '@material-ui/core';

const styles = theme => ({
  topbar: {
    gridArea: 'a',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #00000020',
  },
  closeIcon: {
    height: 36,
    width: 36,
    color: theme.palette.text.primary,
    margin: '0 8px',
  },
});

export const useJss = makeStyles(styles, { name: 'Topbar' });
