import { makeStyles } from '@material-ui/core';

// prettier-ignore
const getBackgroundColor = ({ status }) => {
  switch (status) {
    case 'active': return '#7e90ff';
    case 'created': return '#4caf50';
    case 'claimed': return '#ffb300';
    case 'refunded': return '#9e9e9e';
    default: return 'black';
  }
}

const styles = {
  container: {
    gridArea: 'd',
    width: 90,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 600,
    backgroundColor: getBackgroundColor,
    borderRadius: 8,
  },
};

export const useStyles = makeStyles(styles, { name: 'Status' });
