import { makeStyles } from '@material-ui/core';

const isActiveStep = (yes, no) => ({ isActive }) => (isActive ? yes : no);

const styles = (theme) => ({
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 140,
  },
  iconContainer: {
    height: 48,
    width: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    backgroundColor: isActiveStep('#e8ecff', 'transparent'),
  },
  icon: {
    height: 36,
    width: 36,
    color: ({ isActive, isCompleted }) =>
      isActive || isCompleted ? theme.palette.primary.main : '#717172',
  },
  label: {
    fontWeight: 500,
  },
  sublabel: {
    marginTop: 5,
    fontSize: 12,
    color: theme.colors.dashboardGrey,
    letterSpacing: 0.5,
  },
});

export const useStyles = makeStyles(styles, { name: 'Step' });
