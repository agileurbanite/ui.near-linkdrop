import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    height: 160,
    width: 344,
    marginTop: 24,
    display: 'grid',
    gridTemplateColumns: '24px 43px 13px 104px 13px auto 12px 24px',
    gridTemplateRows: '22px 18px 28px 20px 18px 18px',
    gridTemplateAreas: `
      '. . . . . . . .'
      '. a . b b b x .'
      '. a . c c c . .'
      '. . . . . . . .'
      '. d f g i j . .'
      '. e f h i k . .'
    `,
    border: '1px solid',
    borderColor: theme.colors.dividerOnWhite,
    borderRadius: 8,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: `
        0px 2px 4px -1px rgb(0 0 0 / 20%),
        0px 4px 5px 0px rgb(0 0 0 / 14%),
        0px 1px 10px 0px rgb(0 0 0 / 12%)
      `,
    },
    '@media (min-width: 1065px)': {
      '&:nth-child(2n)': {
        marginLeft: 20,
      },
    },
    '@media (min-width: 1440px)': {
      '&:nth-child(2n)': {
        marginLeft: 0,
      },
      '&:nth-child(3n + 2)': {
        margin: '24px 24px 0 24px',
      },
    },
  },
  icon: {
    gridArea: 'a',
    fontSize: 30,
    alignSelf: 'center',
    marginLeft: '-4px',
  },
  name: {
    gridArea: 'b',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: 12,
    fontWeight: 500,
    margin: '0 8px 0 0',
  },
  totalNear: {
    gridArea: 'c',
    fontSize: 24,
    fontWeight: 700,
  },
  label: {
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 0.4,
    color: theme.palette.text.secondary,
  },
  value: {
    fontWeight: 600,
  },
  links: {
    gridArea: 'd',
  },
  linksValue: {
    gridArea: 'e',
  },
  divider: {
    height: '100%',
    width: 1,
  },
  divider1: {
    gridArea: 'f',
  },
  created: {
    gridArea: 'g',
  },
  createdValue: {
    gridArea: 'h',
  },
  divider2: {
    gridArea: 'i',
  },
  status: {
    gridArea: 'j',
  },
  statusValue: {
    gridArea: 'k',
    color: theme.palette.primary.main,
    textTransform: 'capitalize',
  },
});

export const useStyles = makeStyles(styles, { name: 'Campaign' });
