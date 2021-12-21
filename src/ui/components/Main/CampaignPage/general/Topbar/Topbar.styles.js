import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  topBar: {
    gridArea: 'a',
    minHeight: 72,
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
  campaignName: {
    width: '90%',
    wordBreak: 'break-all',
    overflowWrap: 'anywhere',
  },
});

export const useStyles = makeStyles(styles, { name: 'TopBar' });
