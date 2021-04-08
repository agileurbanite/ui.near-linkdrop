import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3d5afe',
      light: '#5870ff',
    },
  },
  colors: {
    dashboardGrey: '#989898',
    dashboardHoverBgGrey: '#ffffff28',
    dividerOnWhite: '#dfdfdf',
    red: '#e40029',
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: 'white',
        boxShadow: '0 12px 24px 0 #00c08b3d',
        padding: 16,
        borderRadius: 8,
        fontWeight: 700,
        letterSpacing: '1.25px',
        lineHeight: 1.14,
      },
    },
  },
});
