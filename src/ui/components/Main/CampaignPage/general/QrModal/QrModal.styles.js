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
    gridTemplateRows: '40px 28px 28px 507.17px 44.83px 32px 20px',
    gridTemplateColumns: '63.53px 11.48px 550px 11.48px 63.53px',
    alignItems: 'center',
    textAlign: 'center',
    gridTemplateAreas: `
      '. . . . .'
      '. . a . .'
      '. . b . .'
      'c . d . e'
      '. . . . .'
      '. . f . .'
      '. . . . .'
    `,
  },
  header: {
    gridArea: 'a',
  },
  description: {
    gridArea: 'b',
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
    '&:hover':{
      backgroundColor: '#3D5AFE',
    },
  },
  arrow:{
    height: 35,
    width: 35,
    color: '#3D5AFE',
  },
}

export const useStyles = makeStyles(styles, {name: 'QrModal'})
