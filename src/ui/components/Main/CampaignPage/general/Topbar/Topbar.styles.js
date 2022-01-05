import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  topBar: {
    gridArea: 'a',
    minHeight: 72,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #00000020',
  },
  closeIcon: {
    height: 36,
    width: 36,
    color: theme.palette.text.primary,
    margin: '0 8px',
    '@media (max-width: 600px)': {
      height: 25,
      width: 25,
    },
  },
  campaignName: {
    width: '90%',
    wordBreak: 'break-all',
    overflowWrap: 'anywhere',
    '@media (max-width: 600px)': {
      fontSize: 20,
    },
  },
});

export const useStyles = makeStyles(styles, { name: 'TopBar' });
