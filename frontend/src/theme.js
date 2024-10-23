
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';



// Create a theme instance.
const theme = createTheme({
  direction: "rtl",

  typography: {
    fontFamily: "IRANSansWeb, sans-serif"
  },

});
export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: { main: "#2042da", contrastText: "#fff" },
    secondary: { main: "#657ffa", contrastText: "#fff" },
    success: { main: "#10c02d", contrastText: "#fff" },
    info: { main: "#fff", contrastText: "#fff" },
    warning: { main: "#fda002", contrastText: "#fff" },
    error: { main: "#ff5925" },

    background: { paper: "#fff", default: "#d1ecff47" }
  }


})

export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",

  },


});

export default theme;
