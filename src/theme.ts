import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#b302ff",
    },
    secondary: {
      main: "#029eff",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "6rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "4rem",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "3.25rem",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "1.15rem",
    },
  },
});

export const responsiveTheme = responsiveFontSizes(theme);
