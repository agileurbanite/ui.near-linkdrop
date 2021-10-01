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
    grey450: '#636364',
    grey500: '#212121',
  },
  overrides: {
    MuiSvgIcon: {
      root: {
        height: 20,
        width: 20,
      }
    },
    MuiTypography: {
      h3: {
        fontSize: 24,
        fontWeight: 700,
      },
    },
    MuiButton: {
      containedPrimary: {
        color: 'white',
        boxShadow: '0 12px 24px 0 #3d5afe3d',
        padding: '16px 35px',
        borderRadius: 8,
        fontWeight: 500,
        letterSpacing: 1.25,
        lineHeight: 1.14,
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 8,
      }
    },
  },
});
