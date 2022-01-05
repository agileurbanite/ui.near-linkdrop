import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  icon: {
    height: 20,
    width: 20,
    fill: '#757575',
    '&:hover': {
      fill: theme.palette.primary.main,
    },
  },
  tooltip: {
    color: 'white',
    backgroundColor: '#3D5AFE',
    fontSize: 12,
    borderRadius: 8,
    padding: '8px 12px',
    fontWeight: 400,
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 700,
    height: 700,
    display: 'grid',
    gridTemplateRows: '5% 5% 5% 70% 5% 5% 5% ',
    gridTemplateColumns: '10% 80% 10% ',
    alignItems: 'center',
    textAlign: 'center',
    gridTemplateAreas: `
      '. . .'
      '. a .'
      '. . .'
      '. d .'
      '. . .'
      '. f .'
      '. . .'
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
  nftWrapper: {
    gridArea: 'd',
  },
  nft: {
    maxWidth: '100%',
    maxHeight: '460px',
    height: 'auto',
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
  nftButton: {
    '@media (max-width: 600px)': {
      padding: 5,
      width: 30,
      height: 30,
    },
  },
});

export const useStyles = makeStyles(styles, { name: 'NftButton' });
