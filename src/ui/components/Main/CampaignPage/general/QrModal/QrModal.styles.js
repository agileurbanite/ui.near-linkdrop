import { makeStyles } from '@material-ui/core';

const styles = {
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 700,
    height: 700,
    display: 'grid',
    gridTemplateRows: '5% 5% 5% 2% 68% 5% 5% 5% ',
    gridTemplateColumns: '8% 2% 80% 2% 8%',
    alignItems: 'center',
    textAlign: 'center',
    gridTemplateAreas: `
      '. . . . .'
      '. . a . .'
      '. . b . .'
      '. . . . .'
      'c . d . e'
      '. . . . .'
      '. . f . .'
      '. . . . .'
    `,
    '@media (max-width: 800px)': {
      width: '100%',
      height: '100%',
    },
    '@media (max-height: 700px)': {
      height: '100%',
      width: '100%',
    },
  },

  header: {
    gridArea: 'a',
    fontSize: 24,
  },
  description: {
    gridArea: 'b',
    fontSize: 18,
  },
  arrowBack: {
    gridArea: 'c',
  },
  qrWrapper: {
    gridArea: 'd',
  },
  arrowForward: {
    gridArea: 'e',
  },
  buttonWrapper: {
    gridArea: 'f',
  },
  button: {
    width: 150,
    height: 32,
    color: 'white',
    backgroundColor: '#3D5AFE',
    borderRadius: 8,
    letterSpacing: 0.15,
    fontSize: 12,
    fontWeight: 500,
    '&:hover': {
      backgroundColor: '#3D5AFE',
    },
  },
};

export const useStyles = makeStyles(styles, { name: 'QrModal' });
