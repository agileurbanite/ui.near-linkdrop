import { makeStyles } from '@material-ui/core';
import { keyStatus } from '../../../../../../../config/keyStatus';

const { active, created, claimed, refunded } = keyStatus;

// prettier-ignore
const getBackgroundColor = ({ status }) => {
  switch (status) {
    case active: return '#7e90ff';
    case created: return '#4caf50';
    case claimed: return '#ffb300';
    case refunded: return '#9e9e9e';
    default: return 'black';
  }
}

const styles = {
  container: {
    gridArea: 'd',
    justifySelf: 'center',
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
    '@media (min-width: 1024px)': {
      justifySelf: 'start',
    },
  },
};

export const useStyles = makeStyles(styles, { name: 'Status' });
