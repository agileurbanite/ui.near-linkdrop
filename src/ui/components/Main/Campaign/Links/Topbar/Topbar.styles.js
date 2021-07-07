import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  topbar: {
    height: 60,
    display: 'grid',
    gridTemplateColumns: '56px 56px auto 24px max-content 16px',
    gridTemplateRows: '100%',
    gridTemplateAreas: `
      'a b c . e .'
    `,
    alignItems: 'center',
    borderBottom: '1px solid',
    borderBottomColor: theme.colors.dividerOnWhite,
  },
  checkbox: {
    gridArea: 'a',
    justifySelf: 'start',
  },
  title: {
    gridArea: 'b',
    fontSize: 20,
    fontWeight: 500,
  },
  selected: {
    gridArea: 'c',
    justifySelf: 'end',
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 0.4,
    color: theme.palette.text.secondary,
  },
  downloadCSV: {
    gridArea: 'e',
  },
  downloadCSVText: {
    textTransform: 'none',
    fontSize: 16,
    marginLeft: 5,
    color: theme.palette.text.primary,
  },
});

export const useStyles = makeStyles(styles, { name: 'Topbar' });
