import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: ' column',
    alignItems: 'center',
  },

  actions: {
    width: '100%',
    height: 72,
    display: 'grid',
    gridTemplateColumns: 'calc(50% - 104px) 208px calc(50% - 104px)',
    gridTemplateRows: '100%',
    gridTemplateAreas: `
      'a b .'
    `,
    alignItems: 'center',
    borderTop: `1px solid ${theme.colors.dividerOnWhite}`,
    marginTop: 72,
  },
  confirm: {},
  back: {
    gridArea: 'a',
    justifySelf: 'end',
    marginRight: 24,
    color: theme.palette.text.secondary,
    fontWeight: 500,
  },
  '@media (max-width: 600px)': {
    actions: {
      display: 'flex',
      flexDirection: 'column-reverse',
    },
    confirm: {
      flex: 1,
      width: '100%',
      marginBottom: 8,
      marginTop: 8,
    },
    back: {
      flex: 1,
    },
  },
});

export const useStyles = makeStyles(styles, { name: 'Step2' });
