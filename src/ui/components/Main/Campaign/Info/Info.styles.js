import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  emojiContainer: {
    height: 120,
    width: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    border: '1px solid',
    borderColor: theme.colors.dividerOnWhite,
    marginTop: 40,
  },
  emoji: {
    fontSize: 72,
  },
  name: {
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: 12,
    fontWeight: 500,
    marginTop: 16,
  },
  balance: {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 8,
  },
  links: {
    width: 275,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    borderRadius: 8,
    color: '#ffffff',
    marginTop: 16,
  },
  linksSubtitle: {
    fontSize: 12,
    color: theme.palette.text.secondary,
    marginTop: 4,
  },
});

export const useStyles = makeStyles(styles, { name: 'Info' });
