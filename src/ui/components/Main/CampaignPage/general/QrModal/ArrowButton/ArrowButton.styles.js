import { makeStyles } from '@material-ui/core';

const styles = {
  arrow:{
    height: 35,
    width: 35,
  },
  arrowBack: {
    alignItems: 'center',
    textAlign: 'center',
  }
}

export const useStyles = makeStyles(styles, { name: 'ArrowButton'})
