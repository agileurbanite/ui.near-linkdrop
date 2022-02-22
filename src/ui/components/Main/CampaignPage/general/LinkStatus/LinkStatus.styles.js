import { makeStyles } from '@material-ui/core';
import { keyStatus, nftKeyStatus } from '../../../../../../config/keyStatus';

const styles = {
  container: {
    gridArea: 'd',
    marginRight: 15.23,
    width: 16,
    height: 16,
    backgroundColor: ({ status }) =>
      status === keyStatus.active || status === nftKeyStatus.active ? '#3D5AFE' : '#C9C9C9',
    borderRadius: '50%',
  },
};

export const useStyles = makeStyles(styles, { name: 'LinkStatus' });
