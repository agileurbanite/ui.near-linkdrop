import { makeStyles } from '@material-ui/core';
import { campaignStatus } from '../../../../../../../config/campaignStatus';

const styles = () => ({
  container: {
    gridArea: 'b',
    alignSelf: 'center',
  },
  status: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '20px',
    color: ({ status }) => (status === campaignStatus.active ? '#3D5AFE' : '#E0203C'),
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  label: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '20px',
    color: '#636364',
  },
  value: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '20px',
    color: '#212121',
  },
});

export const useStyles = makeStyles(styles, { name: 'Info' });
