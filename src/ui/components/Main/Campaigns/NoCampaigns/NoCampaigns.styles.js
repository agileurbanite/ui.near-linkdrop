import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    gridArea: 'b',
    alignSelf: 'center',
    justifySelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '15%',
  },
  emoji: {
    fontSize: 80,
  },
  header: {
    fontSize: 34,
    fontWeight: 700,
    letterSpacing: 0.25,
    marginTop: 8,
  },
  title: {
    marginTop: 16,
    letterSpacing: 0.5,
  },
  button: {
    marginTop: 24,
    padding: '12px 26px',
    fontWeight: 500,
  },
  addIcon: {
    marginRight: 12,
  },
};

export const useStyles = makeStyles(styles, { name: 'NoCampaigns' });
