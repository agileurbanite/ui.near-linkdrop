import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: '16px max-content auto',
    gridTemplateAreas: `
      '.'
      'a'
      'b'
    `,
  },
  body: {
    gridArea: 'b',
    width: '100%',
    justifySelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (min-width: 1024px)': {
      minWidth: 680,
      maxWidth: 900,
    },
  },
};

export const useStyles = makeStyles(styles, {name: 'Nft'})
