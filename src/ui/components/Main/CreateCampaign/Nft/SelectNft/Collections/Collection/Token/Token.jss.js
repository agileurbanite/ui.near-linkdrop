import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    width: 120,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    boxShadow: '0px 0px 5px 2px rgba(34, 60, 80, 0.13)',
    border: ({ selected }) => (selected ? '1px solid blue' : '1px solid white'),
  },
  media: {
    height: 100,
    width: 100,
  },
  select: {
    margin: '10px 0',
  },
};

export const useJss = makeStyles(styles, { name: 'Token' });
