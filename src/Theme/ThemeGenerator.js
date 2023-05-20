import { createTheme } from '@mui/material/styles'
import kalamehBlack from '../Fonts/KalamehWeb_Black.woff2'
import kalamehRegular from '../Fonts/KalamehWeb_Regular.woff2'
import kalamehBold from '../Fonts/KalamehWeb_Bold.woff2'
import VarelaRound from "../Fonts/VarelaRound-Regular.ttf";

const Kalameh = {
  fontFamily: 'Kalameh',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Kalameh'),
    local('Kalameh-Regular'),
    url(${kalamehRegular}) format('woff2')
  `,
  unicodeRange: 'U+0600-06FF',
}

const KalamehBold = {
  fontFamily: 'Kalameh',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
    local('Kalameh'),
    local('Kalameh-Bold'),
    url(${kalamehBold}) format('woff2')
  `,
  unicodeRange: 'U+0600-06FF',
}

const KalamehBlack = {
  fontFamily: 'Kalameh',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 800,
  src: `
    local('Kalameh'),
    local('Kalameh-Black'),
    url(${kalamehBlack}) format('woff2')
  `,
  unicodeRange: 'U+0600-06FF',
}

const varelaRound = {
  fontFamily: "Quicksand",
  fontStyle: "Regular",
  fontDisplay: "swap",
  src: `
   local('VarelaRound-Regular'),
   url(./Fonts/VarelaRound-Regular.ttf) format('ttf')
 `,
  unicodeRange:
    "U+0000-00FF, U+0600-06FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};


export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#0673F3",
      light: "#4885FF",
      dark: "#1552CC",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#F6D101",
      light: "#fbd92a",
      dark: "#dab900",
      contrastText: "#090020",
    },
    warning: {
      main: "#EC9B12",
      light: "#f7bf62",
      dark: "#d28a16",
    },
    error: {
      main: "#E64646",
      light: "#FFD6CC",
      dark: "#c53b3b",
    },
    text: {
      primary: "#000000",
      secondary: "rgba(0,0,0,0.56)",
      disabled: "rgba(0,0,0,0.58)",
      hint: "rgba(0,0,0,0.4)",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    success: {
      main: "#4BB34B",
    },
    divider: "rgba(0,0,0,0.4)",
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 600,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 400,
      fontSize: 48,
      lineHeight: 1,
    },
    h2: {
      fontWeight: 100,
      fontSize: 30,
    },
    h3: {
      fontWeight: 100,
      fontSize: 30,
    },
    h4: {
      fontWeight: 800,
    },
    h5: {
      fontWeight: 800,
      fontSize: "1.4rem",
    },
    body1: {
      fontSize: "1.1rem",
    },
    subtitle1: {
      fontWeight: 700,
    },
  },
  spacing: 8,
  props: {
    MuiTooltip: {
      arrow: true,
    },
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  shape: {
    borderRadius: 4,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  // direction: 'rtl',
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [varelaRound],
      },
    },
  },
});