import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  topbar: {
    height: 60,
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: '100%',
    gridTemplateAreas: `
      'a'
    `,
    alignItems: 'center',
    borderBottom: '1px solid',
    borderBottomColor: theme.colors.dividerOnWhite,
    borderTop: '1px solid',
    borderTopColor: theme.colors.dividerOnWhite,
  },
  downloadCSV: {
    gridArea: 'a',
    justifySelf: 'center',
    padding: '5px 20px',
    boxShadow: 'none',
    borderRadius: 8,
    '@media (min-width: 1024px)': {
      justifySelf: 'end',
    },
  },
  downloadCSVText: {
    textTransform: 'none',
    fontWeight: 500,
    fontSize: 16,
    marginLeft: 8,
    letterSpacing: '0.15px',
  },
});

export const useStyles = makeStyles(styles, { name: 'Topbar' });
